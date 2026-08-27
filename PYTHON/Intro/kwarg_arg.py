# *args and **kwargs together

# *args collects positional arguments into a tuple.
# **kwargs collects keyword arguments into a dictionary.


def args_kwargs(*args, **kwargs):

    # Print a line to separate the output.
    print("--------------------------------")

    # args contains all positional arguments.
    # Example: 45, 39
    print("All args:", args)

    # kwargs contains all keyword arguments.
    # Example: a=2, b=30
    print("All kwargs:", kwargs)

    # Print another line to separate the output.
    print("--------------------------------")

# ERROR EXAMPLE

# This would cause an error:
# args_kwargs(a=2, b=30, 45, 39)
# Positional arguments must come before keyword arguments when calling a function.

# CORRECT EXAMPLE

# 45 and 39 are positional arguments.
# a=2 and b=30 are keyword arguments.
# Python separates them automatically:
# args = (45, 39)
# kwargs = {
#     "a": 2,
#     "b": 30
# }

args_kwargs(45, 39, a=2, b=30)