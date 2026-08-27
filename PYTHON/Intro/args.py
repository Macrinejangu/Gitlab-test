# *ARGS

# *args allows us to give a function any number of positional arguments.
# Python collects all those arguments into a TUPLE.


def my_args(*args):

    # Show the data type of args.
    # It will be a tuple.
    print(f"Type of args: {type(args)}")

    # Print all the values collected in args.
    print(f"All args: {args}")

    # args[0] means the first item in the tuple.
    print(f"First arg: {args[0]}")

    print("--------------------")


# We can pass as many positional arguments as we want.
# These values:
# 30, 67, 97, 100
# are collected into:
# (30, 67, 97, 100)

my_args(30, 67, 97, 100)


# *args can contain different types of values.
# Here we have:
# "Hello" → string
# True    → boolean
# 34      → integer

my_args("Hello", True, 34)


# REGULAR FUNCTION
# This function expects exactly two arguments:
# length and width.

def area_rectangle(length, width):

    # Calculate the area.
    area = length * width

    # Display the result.
    print("--------------------")
    print(
        f"For a rectangle with length {length} "
        f"and width {width}, the area is {area}"
    )
    print("--------------------")


# POSITIONAL ARGUMENTS

# The first value goes into length.
# The second value goes into width.
# 20 → length
# 10 → width

area_rectangle(20, 10)


# We can also store values in variables.

width = 4
length = 39


# When we pass them without using their names,
# Python uses their POSITION.
# First value  → length
# Second value → width
# So Python receives:
# length = 4
# width = 39

area_rectangle(width, length)


# KEYWORD ARGUMENTS

# Here we tell Python exactly which parameter each value belongs to.
# width=4  → width parameter
# length=39 → length parameter

area_rectangle(width=width, length=length)


# With keyword arguments, we can change the order because we are naming each parameter.

area_rectangle(width=10, length=55)


# *ARGS WITH A SUM FUNCTION

# A normal function might look like:
# def sum(a, b):
#     return a + b
# The problem is that function only accepts two numbers.
# Using *args allows us to accept any number of numbers.


def sum2(*args):

    # Start our total at zero.
    ans = 0

    # Go through each number inside args.
    #
    # For example, if we call:
    # sum2(29, 49, 34)
    # args becomes:
    # (29, 49, 34)
    # The loop takes one number at a time.

    for n in args:

        # Show the current number.
        print(f"Current number: {n}")

        # Add the current number to our total.
        ans = ans + n

    # Show the final total.
    print(f"Sum is: {ans}")


# We can give the function as many numbers as we want.

sum2(29, 49, 34, 40, 69, 98)