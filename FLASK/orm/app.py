# app.py
# This file creates our Flask API.

from flask import Flask, send_file, jsonify, request

# Import our Inventory class from orm.py
from orm import Inventory

# Import our Database class from db.py
from db import Database


# Create the Flask application
app = Flask(__name__)


# Create the database object
db = Database()

# Give our database connection to Inventory
inventory = Inventory(db)


# GET /inventory
# Gets all inventory items from PostgreSQL
@app.route("/inventory", methods=["GET"])
def list_inventory():

    # Calls get_all_items() from orm.py
    items = inventory.get_all_items()

    # Convert the Python results into JSON
    return jsonify(items)


# POST /inventory
# Adds a new inventory item to PostgreSQL
@app.route("/inventory", methods=["POST"])
def add_inventory():

    # Get the JSON sent by the user/client
    data = request.get_json()

    # Send those values to add_item() in orm.py
    new_item = inventory.add_item(
        name=data["name"],
        qty=data["qty"],
        buying_price=data["buying_price"],
        selling_price=data["selling_price"]
    )

    # Return a JSON response and HTTP status code 201
    return jsonify({
        "message": "Item added successfully",
        "item": new_item
    }), 201


# Start Flask when we run this file directly
if __name__ == "__main__":
    app.run(debug=True)