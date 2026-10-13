from db import prisma


# Default order statuses
PENDING_STATUS = {
    "name": "Pending",
    "description": "Customer has products in their cart.",
    "icon_name": "shopping-cart",
    "badge_color": "yellow",
    "text_color": "black"
}

PAID_STATUS = {
    "name": "Paid",
    "description": "Payment has been completed successfully.",
    "icon_name": "check-circle",
    "badge_color": "green",
    "text_color": "white"
}

STATUSES = [
    PENDING_STATUS,
    {
        "name": "Awaiting Payment",
        "description": "Waiting for payment confirmation.",
        "icon_name": "clock",
        "badge_color": "orange",
        "text_color": "black"
    },
    PAID_STATUS,
    {
        "name": "Processing",
        "description": "The order is being prepared.",
        "icon_name": "package",
        "badge_color": "blue",
        "text_color": "white"
    },
    {
        "name": "Shipped",
        "description": "The order has been dispatched.",
        "icon_name": "truck",
        "badge_color": "purple",
        "text_color": "white"
    },
    {
        "name": "Out for Delivery",
        "description": "The order is on its way to the customer.",
        "icon_name": "map-pin",
        "badge_color": "blue",
        "text_color": "white"
    },
    {
        "name": "Delivered",
        "description": "The customer has received the order.",
        "icon_name": "check-circle",
        "badge_color": "green",
        "text_color": "white"
    },
    {
        "name": "Cancelled",
        "description": "The order was cancelled.",
        "icon_name": "x-circle",
        "badge_color": "red",
        "text_color": "white"
    },
    {
        "name": "Returned",
        "description": "The customer returned the order.",
        "icon_name": "rotate-ccw",
        "badge_color": "orange",
        "text_color": "black"
    },
    {
        "name": "Refunded",
        "description": "The payment was refunded.",
        "icon_name": "refresh-cw",
        "badge_color": "gray",
        "text_color": "white"
    }
]


# Create or update the default statuses
async def seed_status():

    for single_status in STATUSES:

        await prisma.order_status.upsert(
            where={"name": single_status["name"]},
            data={
                "create": single_status,
                "update": {
                    "description": single_status["description"],
                    "icon_name": single_status["icon_name"],
                    "badge_color": single_status["badge_color"],
                    "text_color": single_status["text_color"]
                }
            }
        )