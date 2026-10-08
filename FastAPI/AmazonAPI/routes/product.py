from decimal import Decimal
from typing import Optional

from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, Field

from db import prisma


router = APIRouter()


# 1. SCHEMA FOR CREATING PRODUCTS

class ProductSchema(BaseModel):
    name: str
    description: Optional[str] = None
    price: Decimal = Field(gt=0)
    stock_quantity: int = Field(default=0, ge=0)


# 2. SCHEMA FOR UPDATING PRODUCTS

class UpdateProductSchema(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    price: Optional[Decimal] = Field(default=None, gt=0)
    stock_quantity: Optional[int] = Field(default=None, ge=0)

# 3. POST - CREATE PRODUCT

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

# 4. PUT - UPDATE PRODUCT

@router.put("/{product_id}", status_code=status.HTTP_200_OK)
async def update_product(
    product_id: int,
    payload: UpdateProductSchema
):

    # Check whether the product exists
    existing = await prisma.product.find_unique(
        where={"id": product_id}
    )

    if not existing:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    # Include only fields provided in the request
    update_data = payload.model_dump(exclude_unset=True)

    # Prevent null values for required database fields
    required_fields = {"name", "price", "stock_quantity"}

    if any(
        field in update_data and update_data[field] is None
        for field in required_fields
    ):
        raise HTTPException(
            status_code=422,
            detail="Name, price and stock quantity cannot be null"
        )

    # Reject empty updates
    if not update_data:
        raise HTTPException(
            status_code=400,
            detail="No fields provided for update"
        )

    # Update only the supplied fields
    updated_product = await prisma.product.update(
        where={"id": product_id},
        data=update_data
    )

    return {
        "message": "Product updated successfully",
        "product": updated_product
    }

# 5. GET - RETRIEVE ALL PRODUCTS

@router.get("/")
async def get_all():

    products = await prisma.product.find_many()

    return products


# 6. GET - RETRIEVE ONE PRODUCT

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

# 7. DELETE - REMOVE PRODUCT

@router.delete("/{product_id}")
async def delete_product(product_id: int):

    product = await prisma.product.find_unique(
        where={"id": product_id}
    )

    if not product:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    await prisma.product.delete(
        where={"id": product_id}
    )

    return {
        "message": "Product deleted successfully"
    }