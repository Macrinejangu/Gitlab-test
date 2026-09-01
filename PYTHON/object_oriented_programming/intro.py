# A class is a blueprint used to create objects.
class House:

    # These are default properties shared by House objects.
    bedrooms = 3
    bathrooms = 2
    floors = 1
    area = 120
    owner = ""
    location = ""
    architect = "KIMANI"


    # This method sets the owner and location for the specific House object using it.
    def config(self, owner, location):

        # "self" refers to the current object.

        # Store the provided owner in this object.
        self.owner = owner

        # Store the provided location in this object.
        self.location = location


    # This method helps us inspect the current object.
    def print_self(self):

        # Print information about the current object.
        print(self)

        # Print the properties stored directly inside the current object.
        print(self.__dict__)


# CREATE MACRINE'S HOUSE

# Create an object using the House class.
macrine_house = House()

# Run the config method for macrine_house.
macrine_house.config(
    owner="Macrine",
    location="Kikuyu"
)

print(f"Macrine's house owner: {macrine_house.owner}")
print(f"Macrine's house location: {macrine_house.location}")
print(f"Macrine's house bedrooms: {macrine_house.bedrooms}")
print(f"Macrine's house bathrooms: {macrine_house.bathrooms}")
print(f"Macrine's house floors: {macrine_house.floors}")
print(f"Macrine's house area: {macrine_house.area}")
print(f"Macrine's house architect: {macrine_house.architect}")

# Inspect the current object's stored properties.
macrine_house.print_self()


# CREATE DANIEL'S HOUSE

# Create another object using the same House class.
daniel_house = House()

# Run the config method for daniel_house.
daniel_house.config(
    owner="Daniel",
    location="Muranga"
)

print(f"Daniel's house owner: {daniel_house.owner}")
print(f"Daniel's house location: {daniel_house.location}")
print(f"Daniel's house bedrooms: {daniel_house.bedrooms}")
print(f"Daniel's house bathrooms: {daniel_house.bathrooms}")
print(f"Daniel's house floors: {daniel_house.floors}")
print(f"Daniel's house area: {daniel_house.area}")
print(f"Daniel's house architect: {daniel_house.architect}")

# Inspect the current object's stored properties.
daniel_house.print_self()