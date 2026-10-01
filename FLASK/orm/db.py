'''
db.py
This file handles the connection between our Python project and our PostgreSQL database.


# os lets us access environment variables such as DB_NAME and DB_PASSWORD
'''
import os

# psycopg2 lets Python connect to and communicate with PostgreSQL
import psycopg2

# RealDictCursor makes database results easier to read.
# Instead of returning something like: (1, "Macrine", "macrine@email.com")

# it returns something closer to: {"id": 1, "name": "Macrine", "email": "macrine@email.com"}
from psycopg2.extras import RealDictCursor

# contextmanager helps us create a function that handles opening and closing our database connection for us
from contextlib import contextmanager

# load_dotenv loads the variables stored inside our .env file
from dotenv import load_dotenv


# Read the variables inside the .env file. For example: DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT
load_dotenv()


# This class will manage our database connection
class Database:

    # __init__ runs automatically whenever we create a new Database object
    def __init__(self):

        # Store all our PostgreSQL connection details inside one dictionary called self.config
    
        # os.getenv() gets each value from the .env file
        self.config = {
            "dbname": os.getenv("DB_NAME"),
            "user": os.getenv("DB_USER"),
            "password": os.getenv("DB_PASSWORD"),
            "host": os.getenv("DB_HOST"),
            "port": os.getenv("DB_PORT")
        }


    # @contextmanager helps this function manage the database connection automatically
    @contextmanager
    def get_cursor(self):

        # Connect to PostgreSQL using the information stored inside self.config
        
        # **self.config takes the dictionary above and passes each item to psycopg2.connect()
        conn = psycopg2.connect(**self.config)

        # Create a cursor. We use the cursor to execute SQL queries.
        
        # RealDictCursor makes returned rows behave like dictionaries
        cursor = conn.cursor(cursor_factory=RealDictCursor)

        try:
            # Give the cursor to whatever part of our program needs to run SQL queries
            yield cursor

            # If everything worked, save the database changes
            conn.commit()

        except Exception as e:

            # If something went wrong, cancel the changes made during this transaction
            conn.rollback()

            # Send the error back so we can see what went wrong
            raise e

        finally:

            # Whether the query worked or failed, always close the cursor
            cursor.close()

            # Then close the PostgreSQL connection
            conn.close()

    # This block only runs when we run db.py directly
if __name__ == "__main__":

    print("Testing database connection...")

    try:
        # Create an object from our Database class
        db = Database()

        # Open a database connection and give us a cursor
        with db.get_cursor() as cursor:

            # Ask PostgreSQL for:
            # 1. The current database time
            # 2. The PostgreSQL version
            cursor.execute(
                "SELECT NOW() AS current_time, version() AS version;"
            )

            # Get one row from the result
            result = cursor.fetchone()

            # Print the information returned by PostgreSQL
            print(
                f"Database connection successful. "
                f"Current time: {result['current_time']}, "
                f"Version: {result['version']}"
            )

    except Exception as e:
        # If anything goes wrong, print the actual error
        print(f"Database connection failed: {e}")