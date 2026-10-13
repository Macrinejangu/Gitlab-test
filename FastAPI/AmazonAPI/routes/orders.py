from fastapi import APIRouter, Depends, HTTPException

from db import prisma
from auth import get_current_user


router = APIRouter()


# Retrieve all orders belonging to the logged-in user
@router.get("/")
async def get_orders(
    current_user=Depends(get_current_user)
):

    orders = await prisma.order.find_many(
        where={"user_id": current_user.id},
        include={
            "order_status": True,
            "order_item": {
                "include": {
                    "product": True
                }
            }
        }
    )

    return orders


# Retrieve the customer's active shopping cart
@router.get("/active")
async def get_active_order(
    current_user=Depends(get_current_user)
):

    # Find the Pending status
    pending_status = await prisma.order_status.find_unique(
        where={"name": "Pending"}
    )

    if not pending_status:
        raise HTTPException(
            status_code=500,
            detail="Pending status has not been configured"
        )

    # Find the user's pending order and its products
    active_order = await prisma.order.find_first(
        where={
            "user_id": current_user.id,
            "status_id": pending_status.id
        },
        include={
            "order_status": True,
            "order_item": {
                "include": {
                    "product": True
                }
            }
        }
    )

    if not active_order:
        raise HTTPException(
            status_code=404,
            detail="No active order found"
        )

    return active_order