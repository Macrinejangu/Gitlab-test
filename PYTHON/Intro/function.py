# FUNCTIONS
#
# A function is a reusable block of code.
#
# JavaScript:
#
# function areaCircle(radius) {
#     return 3.142 * radius ** 2;
# }
#
# Python uses 'def' instead of 'function'.
#
# Python:
#
def area_circle(radius):
    # Calculate the area of the circle.
    # ** 2 means "squared".
    ans = 3.142 * radius ** 2

    # f-strings allow us to put variables inside text.
    print(f"For a circle with radius {radius}, the area is {ans}")

    # return sends the calculated answer back to whoever
    # called the function.
    return ans


# CALLING A FUNCTION
#
# Give the function 20 as the radius.
area_circle(20)


# FUNCTIONS CAN BE STORED IN VARIABLES
#
# This stores a reference to the function.
# It does not run the function yet.
new_f = area_circle


# Because new_f refers to area_circle,
# we can use new_f to call the function.
new_f(10)