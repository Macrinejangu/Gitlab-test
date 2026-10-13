from decimal import Decimal

from fastapi import APIRouter, HTTPException, Depends, status
from pydantic import BaseModel, Field

from db import prisma
from auth import get_current_user


router = APIRouter()


# Information required to add a product to the cart
class OrderItemSchema(BaseModel):
    product_id: int
    quantity: int = Field(default=1, gt=0)


# Recalculate the total amount of an order
async def calculate_order_total(order_id: int):

    items = await prisma.order_item.find_many(
        where={"order_id": order_id}
    )

    total = sum(
        (item.price * item.quantity for item in items),
        Decimal("0.00")
    )

    await prisma.order.update(
        where={"id": order_id},
        data={"total_amount": total}
    )

    return total


# Add a product to the customer's cart
@router.post("/", status_code=status.HTTP_201_CREATED)
async def add_to_cart(
    payload: OrderItemSchema,
    current_user=Depends(get_current_user)
):

    # Check whether the product exists
    product = await prisma.product.find_unique(
        where={"id": payload.product_id}
    )

    if not product:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    # Find the Pending status
    pending_status = await prisma.order_status.find_unique(
        where={"name": "Pending"}
    )

    if not pending_status:
        raise HTTPException(
            status_code=500,
            detail="Pending order status has not been configured"
        )

    # Find the customer's active order
    current_order = await prisma.order.find_first(
        where={
            "user_id": current_user.id,
            "status_id": pending_status.id
        }
    )

    # Create a pending order if one doesn't exist
    if not current_order:
        current_order = await prisma.order.create(
            data={
                "user_id": current_user.id,
                "status_id": pending_status.id,
                "total_amount": Decimal("0.00")
            }
        )

    # Check whether this product is already in the cart
    existing_item = await prisma.order_item.find_first(
        where={
            "order_id": current_order.id,
            "product_id": payload.product_id
        }
    )

    # Work out the new quantity
    new_quantity = payload.quantity

    if existing_item:
        new_quantity += existing_item.quantity

    # Don't allow quantities above available stock
    if new_quantity > product.stock_quantity:
        raise HTTPException(
            status_code=400,
            detail="Requested quantity exceeds available stock"
        )

    if existing_item:

        # Update the existing cart item
        cart_item = await prisma.order_item.update(
            where={"id": existing_item.id},
            data={
                "quantity": new_quantity
            }
        )

    else:

        # Create a new cart item
        cart_item = await prisma.order_item.create(
            data={
                "order_id": current_order.id,
                "product_id": product.id,
                "quantity": payload.quantity,
                "price": product.price
            }
        )

    # Update the order total
    order_total = await calculate_order_total(current_order.id)

    return {
        "message": "Cart updated successfully",
        "order_id": current_order.id,
        "cart_item": cart_item,
        "order_total": order_total
    }