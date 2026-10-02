# Import FastAPI and tools for handling errors/status codes
from fastapi import FastAPI, HTTPException, status

# Reuse yesterday's Inventory and Database classes
from orm import Inventory
from db import Database


# Create the FastAPI application
app = FastAPI()

# Connect our Inventory class to the database
db = Database()
inventory = Inventory(db)


# GET /inventory
# Return all inventory items
@app.get("/inventory")
def list_inventory():
    return inventory.get_all_items()


# POST /inventory
# Add a new inventory item
@app.post("/inventory", status_code=status.HTTP_201_CREATED)
def add_inventory(item: dict):

    # Make sure a name was provided
    if not item.get("name"):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Item name is required"
        )

    # **item unpacks the dictionary into arguments for add_item()
    new_item = inventory.add_item(**item)

    return {
        "message": "Item added successfully",
        "item": new_item
    }