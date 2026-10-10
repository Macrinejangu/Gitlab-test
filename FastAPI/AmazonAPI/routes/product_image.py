from datetime import datetime, timezone
from pathlib import Path
from uuid import uuid4
import shutil

from fastapi import (
    APIRouter,
    status,
    HTTPException,
    Form,
    UploadFile,
    File
)

from db import prisma
from cloud import upload_to_cloud, delete_from_cloud
from urllib.parse import urlparse, unquote


router = APIRouter()


# Folder for temporary uploads
UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)


# Convert a Cloudinary URL into its public ID
def get_public_id(image_url):

    path = unquote(urlparse(image_url).path)

    if "/image/upload/" not in path:
        raise ValueError("Invalid Cloudinary image URL")

    image_path = path.split("/image/upload/", 1)[1]
    parts = image_path.split("/")

    # Remove Cloudinary's version segment, if present
    if parts and parts[0].startswith("v") and parts[0][1:].isdigit():
        parts.pop(0)

    image_path = "/".join(parts)

    # Remove the file extension
    return image_path.rsplit(".", 1)[0]


# Save an uploaded file temporarily
def save_upload(document):

    original_file = Path(document.filename or "image")

    f_name = original_file.stem
    f_ext = original_file.suffix

    ts = datetime.now(timezone.utc).strftime("%Y%m%d_%H%M%S")

    # Add a random suffix to prevent duplicate filenames
    unique_filename = f"{f_name}_{ts}_{uuid4().hex[:8]}{f_ext}"

    file_path = UPLOAD_DIR / unique_filename

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(document.file, buffer)

    return file_path, unique_filename


# UPLOAD PRODUCT IMAGE
@router.post("/upload", status_code=status.HTTP_201_CREATED)
async def upload_file(
    product_id: int = Form(...),
    document: UploadFile = File(...)
):

    file_path = None
    uploaded_public_id = None
    saved_to_database = False

    try:
        # Check whether the product exists
        product = await prisma.product.find_unique(
            where={"id": product_id}
        )

        if not product:
            raise HTTPException(
                status_code=404,
                detail="Product not found"
            )

        # Save the file locally
        file_path, unique_filename = save_upload(document)

        # Upload it to Cloudinary
        cloud_result = upload_to_cloud(str(file_path))

        if not cloud_result or not cloud_result.get("image_url"):
            raise HTTPException(
                status_code=502,
                detail="Failed to upload image to Cloudinary"
            )

        image_link = cloud_result["image_url"]
        uploaded_public_id = cloud_result["public_id"]

        # Save the image information in PostgreSQL
        new_product_image = await prisma.product_image.create(
            data={
                "product_id": product.id,
                "image": image_link
            }
        )

        saved_to_database = True

        return {
            "message": "File uploaded successfully",
            "product_id": product.id,
            "filename": unique_filename,
            "upload": image_link,
            "new_product_image": new_product_image
        }

    finally:
        # Remove cloud image if the database save failed
        if uploaded_public_id and not saved_to_database:
            delete_from_cloud(uploaded_public_id)

        # Always remove the temporary local file
        if file_path and file_path.exists():
            file_path.unlink()

        await document.close()


# REPLACE AN EXISTING PRODUCT IMAGE
@router.put("/{image_id}")
async def update_product_image(
    image_id: int,
    document: UploadFile = File(...)
):

    file_path = None
    new_public_id = None
    database_updated = False

    try:
        # Find the existing image record
        existing_image = await prisma.product_image.find_unique(
            where={"id": image_id}
        )

        if not existing_image:
            raise HTTPException(
                status_code=404,
                detail="Product image not found"
            )

        old_image_url = existing_image.image

        # Save the replacement file locally
        file_path, unique_filename = save_upload(document)

        # Upload the replacement to Cloudinary
        cloud_result = upload_to_cloud(str(file_path))

        if not cloud_result or not cloud_result.get("image_url"):
            raise HTTPException(
                status_code=502,
                detail="Failed to upload replacement image"
            )

        new_image_url = cloud_result["image_url"]
        new_public_id = cloud_result["public_id"]

        # Update the image URL in PostgreSQL
        updated_image = await prisma.product_image.update(
            where={"id": image_id},
            data={"image": new_image_url}
        )

        database_updated = True

        # Remove the previous image from Cloudinary
        try:
            old_public_id = get_public_id(old_image_url)
            old_deleted = delete_from_cloud(old_public_id)
        except ValueError:
            old_deleted = False

        return {
            "message": "Product image updated successfully",
            "filename": unique_filename,
            "image": updated_image,
            "old_image_deleted": old_deleted
        }

    finally:
        # Remove the new cloud image if the database update failed
        if new_public_id and not database_updated:
            delete_from_cloud(new_public_id)

        # Always remove the temporary local file
        if file_path and file_path.exists():
            file_path.unlink()

        await document.close()