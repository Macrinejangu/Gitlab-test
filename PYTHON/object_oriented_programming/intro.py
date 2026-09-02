# OBJECT-ORIENTED PROGRAMMING (OOP)

# A class is a blueprint used to create objects.
#
# In this example, House is the blueprint.
# We can use it to create different House objects.


class House:

    # DEFAULT CLASS PROPERTIES

    # These are default properties of a House.
    bedrooms = 3
    bathrooms = 2
    floors = 1
    area = 120
    architect = "KIMANI"

    # INITIALIZER / CONSTRUCTOR

    # __init__ runs automatically whenever
    # a new House object is created.
    #
    # It gives the new object its starting values.
    def __init__(self, owner, location):

        # "self" refers to the specific object
        # currently being created.

        # Store the provided owner inside
        # this specific House object.
        self.owner = owner

        # Store the provided location inside
        # this specific House object.
        self.location = location

    # ======================================
    # CONFIGURATION METHOD
    # ======================================

    # This method updates the owner and location
    # after a House object has already been created.
    def config(self, owner, location):

        print("Config method has run")

        # Update the owner of this object.
        self.owner = owner

        # Update the location of this object.
        self.location = location

    # ======================================
    # PRINT INFORMATION ABOUT THE OBJECT
    # ======================================

    def print_self(self):

        # Print information identifying
        # the current object.
        print(self)

        # __dict__ shows the properties stored
        # directly inside this specific object.
        print(self.__dict__)


# ==========================================
# CREATE MACRINE'S HOUSE
# ==========================================

# Create a House object.
#
# Python automatically runs __init__ when
# this object is created.
macrine_house = House(
    owner="Macrine",
    location="Kikuyu"
)


# ==========================================
# ACCESS MACRINE'S HOUSE PROPERTIES
# ==========================================

# Use dot notation to access properties
# belonging to the object.

print(f"Macrine's House Owner: {macrine_house.owner}")
print(f"Macrine's House Location: {macrine_house.location}")
print(f"Macrine's House Bedrooms: {macrine_house.bedrooms}")
print(f"Macrine's House Bathrooms: {macrine_house.bathrooms}")
print(f"Macrine's House Floors: {macrine_house.floors}")
print(f"Macrine's House Area: {macrine_house.area}")
print(f"Macrine's House Architect: {macrine_house.architect}")


# ==========================================
# INSPECT MACRINE'S HOUSE OBJECT
# ==========================================

# Call the object's method.
macrine_house.print_self()

print("End of Macrine's details")


# ==========================================
# CREATE DANIEL'S HOUSE
# ==========================================

# Create another object using the same
# House class as the blueprint.
#
# Python runs __init__ again for this
# new House object.
daniel_house = House(
    owner="Daniel",
    location="Muranga"
)


# ==========================================
# ACCESS DANIEL'S HOUSE PROPERTIES
# ==========================================

print(f"Daniel's House Owner: {daniel_house.owner}")
print(f"Daniel's House Location: {daniel_house.location}")
print(f"Daniel's House Bedrooms: {daniel_house.bedrooms}")
print(f"Daniel's House Bathrooms: {daniel_house.bathrooms}")
print(f"Daniel's House Floors: {daniel_house.floors}")
print(f"Daniel's House Area: {daniel_house.area}")
print(f"Daniel's House Architect: {daniel_house.architect}")


# ==========================================
# INSPECT DANIEL'S HOUSE OBJECT
# ==========================================

# Call the method for Daniel's specific object.
daniel_house.print_self()

print("End of Daniel's details")