# Object Relational Mapping(ORM)
# is a type of programming technique for converting data between incompatible
# type systems in object-oriented programming languages.
# This creates, in effects, a 'virtual object database'
# that can be used from within the programming language

# Inventory class handles database operations for inventory items.
class Inventory:
    # Save the Database object so this class can access PostgreSQL.
    def __init__(self, db):
        self.db = db
    def create_table(self):
        # SQL for creating the inventory table.
        query = """
            CREATE TABLE IF NOT EXISTS inventory (
                id SERIAL PRIMARY KEY,
                name VARCHAR(250) NOT NULL,
                qty INTEGER NOT NULL,
                buying_price INTEGER NOT NULL,
                selling_price INTEGER NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        """

        # Open a cursor and run the SQL above.
        with self.db.get_cursor() as cursor:
            cursor.execute(query)
        print("Inventory table created successfully.")


    def add_item(self, name, qty, buying_price, selling_price):
        # %s marks where the supplied values will go.
        query = """
            INSERT INTO inventory (name, qty, buying_price, selling_price)
            VALUES (%s, %s, %s, %s);
        """
        with self.db.get_cursor() as cursor:
            cursor.execute(
                query,
                (name, qty, buying_price, selling_price)
            )
        print(f"Item '{name}' added successfully.")


    def get_all_items(self):
        query = "SELECT * FROM inventory;"
        with self.db.get_cursor() as cursor:
            cursor.execute(query)
            # fetchall() gets all rows returned by SELECT.
            items = cursor.fetchall()
        return items

# Run this section only when orm.py is executed directly.
if __name__ == "__main__":
    # Import the Database class we created in db.py.
    from db import Database
    # Create our database connection manager.
    db = Database()
    # Give the database object to Inventory.
    inventory = Inventory(db)
    # Create the inventory table if it doesn't already exist.
    inventory.create_table()

    # Add one test item.
    inventory.add_item("Item1", 10, 5, 10)

    # Get everything currently stored in inventory.
    items = inventory.get_all_items()

    print(items)