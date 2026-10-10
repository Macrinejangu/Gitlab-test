import os
import cloudinary
import cloudinary.uploader

from cloudinary.utils import cloudinary_url
from dotenv import load_dotenv


# Load Cloudinary credentials
load_dotenv()

cloudinary.config(
    cloud_name=os.getenv("CLOUD_NAME"),
    api_key=os.getenv("CLOUD_API_KEY"),
    api_secret=os.getenv("CLOUD_API_SECRET"),
    secure=True
)


# Upload an image to Cloudinary
def upload_to_cloud(file_path):

    try:
        res = cloudinary.uploader.upload(file_path)

        return {
            "image_url": res.get("secure_url"),
            "public_id": res.get("public_id")
        }

    except Exception as e:
        print(f"Failed to upload file: {e}")
        return None


# Delete an image from Cloudinary
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