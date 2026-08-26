
# **KWARGS

# **kwargs allows a function to accept any number of keyword arguments.
#
# Keyword arguments use the format:
# name=value

# Example:
# name="Samson"
# age=30

# Python collects all of these keyword arguments
# into a dictionary called kwargs.


def myKwargs(**kwargs):

    # kwargs is a dictionary.
    print("Kwargs is:", type(kwargs))

    # Print the dictionary containing all
    # the keyword arguments.
    print("Kwargs contains:", kwargs)


# EXAMPLE 1

# We pass three keyword arguments:

# a = 23
# b = 30
# c = 40

# Python collects them into one dictionary:

#     "a": 23,
#     "b": 30,
#     "c": 40
# }

myKwargs(a=23, b=30, c=40)


# EXAMPLE 2

# We can use different names and values.
#
# name = "Samson"
# email = "Sam@sam.com"
# dict = {"a": "a"}

# All three become entries in kwargs.

myKwargs(
    name="Samson",
    email="Sam@sam.com",
    dict={"a": "a"}
)


# REGULAR FUNCTION ARGUMENTS

def area_rectangle(length, width):

    # Calculate the area.
    area = length * width

    # Display the result.
    print(
        f"For a rectangle with length {length} "
        f"and width {width}, the area is {area}"
    )


# OPTION 1: POSITIONAL ARGUMENTS
# The values are matched to the parameters
# according to their POSITION.
# 5 goes into length
# 2 goes into width

area_rectangle(5, 2)

# This is equivalent to:
# length = 5
# width = 2


# OPTION 2: VARIABLES + POSITIONAL ARGUMENTS

width = 4
length = 39

# Python uses the position of each value.
#
# First value  → length
# Second value → width

area_rectangle(width, length)

# Therefore:
# length = 4
# width = 39
# The names of the variables do not matter here.
# Their POSITION matters.


# OPTION 3: KEYWORD ARGUMENTS
# Here we explicitly tell Python which value
# belongs to which parameter.

area_rectangle(width=width, length=length)

# Python matches:
#
# width  → width parameter
# length → length parameter
#
# Position no longer matters.


# We can even change the order.

area_rectangle(width=10, length=55)

# This works because Python looks at the
# parameter names.


# IMPORTANT:
# The keyword names must match the parameter names.
# Our function has:
# def area_rectangle(length, width):
# Therefore these work:
# area_rectangle(length=55, width=10)
# area_rectangle(width=10, length=55)
# But this would NOT work:
# area_rectangle(height=10, length=55)
# because the function has no parameter called "height".