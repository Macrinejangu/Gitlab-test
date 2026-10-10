from decimal import Decimal
from typing import Optional

from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, Field

from db import prisma
from cloud import delete_from_cloud
from routes.product_image import get_public_id


router = APIRouter()


# Schema for creating products
class ProductSchema(BaseModel):
    name: str
    description: Optional[str] = None
    price: Decimal = Field(gt=0)
    stock_quantity: int = Field(default=0, ge=0)


# Schema for updating products
class UpdateProductSchema(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    price: Optional[Decimal] = Field(default=None, gt=0)
    stock_quantity: Optional[int] = Field(default=None, ge=0)


# CREATE PRODUCT
@router.post("/", status_code=status.HTTP_201_CREATED)
async def add_product(payload: ProductSchema):

    new_product = await prisma.product.create(
        data={
            "name": payload.name,
            "description": payload.description,
            "price": payload.price,
            "stock_quantity": payload.stock_quantity
        }
    )

    return {
        "message": "New item added",
        "product": new_product
    }


# UPDATE PRODUCT
@router.put("/{product_id}")
async def update_product(
    product_id: int,
    payload: UpdateProductSchema
):

    existing = await prisma.product.find_unique(
        where={"id": product_id}
    )

    if not existing:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    # Update only fields supplied in the request
    update_data = payload.model_dump(exclude_unset=True)

    required_fields = {"name", "price", "stock_quantity"}

    if any(
        field in update_data and update_data[field] is None
        for field in required_fields
    ):
        raise HTTPException(
            status_code=422,
            detail="Required product fields cannot be null"
        )

    if not update_data:
        raise HTTPException(
            status_code=400,
            detail="No fields provided for update"
        )

    updated_product = await prisma.product.update(
        where={"id": product_id},
        data=update_data
    )

    return {
        "message": "Product updated successfully",
        "product": updated_product
    }


# GET ONE PRODUCT
@router.get("/{product_id}")
async def get_by_id(product_id: int):

    product = await prisma.product.find_unique(
        where={"id": product_id}
    )

    if not product:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    return product


# GET ALL PRODUCTS
@router.get("/")
async def get_all():

    products = await prisma.product.find_many()

    return products


# DELETE PRODUCT AND ASSOCIATED IMAGES
@router.delete("/{product_id}")
async def delete_product(product_id: int):

    # Find the product and its images
    product = await prisma.product.find_unique(
        where={"id": product_id},
        include={"product_image": True}
    )

    if not product:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    # Delete each image from Cloudinary
    for image in product.product_image:

        try:
            public_id = get_public_id(image.image)
        except ValueError:
            raise HTTPException(
                status_code=400,
                detail=f"Invalid Cloudinary URL for image {image.id}"
            )

        deleted = delete_from_cloud(public_id)

        if not deleted:
            raise HTTPException(
                status_code=502,
                detail=f"Failed to delete Cloudinary image {image.id}"
            )

    # Delete image records before deleting the product
    async with prisma.tx() as tx:

        await tx.product_image.delete_many(
            where={"product_id": product_id}
        )

        await tx.product.delete(
            where={"id": product_id}
        )

    return {
        "message": "Product and associated images deleted successfully"
    }