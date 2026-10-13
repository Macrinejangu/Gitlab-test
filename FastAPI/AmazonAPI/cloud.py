import os

import cloudinary
import cloudinary.uploader

from dotenv import load_dotenv


# Load environment variables
load_dotenv()


# Configure Cloudinary
cloudinary.config(
    cloud_name=os.getenv("CLOUD_NAME"),
    api_key=os.getenv("CLOUD_API_KEY"),
    api_secret=os.getenv("CLOUD_API_SECRET"),
    secure=True
)


# UPLOAD IMAGE TO CLOUDINARY
def upload_to_cloud(file_path):

    try:
        # Upload the image
        result = cloudinary.uploader.upload(
            file_path,
            resource_type="image",
            folder="amazonapi/products"
        )

        # Return the image URL and Cloudinary public ID
        return {
            "image_url": result.get("secure_url"),
            "public_id": result.get("public_id")
        }

    except Exception as e:
        print(f"Failed to upload file: {e}")
        return None


# DELETE IMAGE FROM CLOUDINARY
def delete_from_cloud(public_id):

    try:
        result = cloudinary.uploader.destroy(
            public_id,
            resource_type="image",
            invalidate=True
        )

        return result.get("result") in ("ok", "not found")

    except Exception as e:
        print(f"Failed to delete image: {e}")
        return False