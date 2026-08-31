# DECORATOR THAT WORKS WITH *ARGS AND **KWARGS


def log_deco(func):

    # The wrapper uses *args and **kwargs because the functions we decorate might receive
    # different numbers and types of arguments.
    def wrapper(*args, **kwargs):

        # Print a line to make the output easier to read.
        print("--------------------------------")

        # Print all positional arguments passed to the original function.
        print("Args:", args)

        # Print all keyword arguments passed to the original function.
        print("Kwargs:", kwargs)

        # Call the original function.
        # *args passes positional arguments.
        # **kwargs passes keyword arguments.
        # Store the value returned by the original
        # function inside result.
        result = func(*args, **kwargs)

        # Print the name of the function that was called.
        print(f"Function called was {func.__name__}")

        # Print the value returned by the function.
        print("Result:", result)

        # Print another line to separate output.
        print("--------------------------------")

        # Return the original function's result.
        return result

    # Return the wrapper function.
    return wrapper


# FUNCTION WITH NO ARGUMENTS

@log_deco
def hello():

    # Print a message.
    print("Hello world")

    # Return a value.
    return 123


# FUNCTION WITH TWO ARGUMENTS

@log_deco
def sum(a, b):

    # Add the two numbers.
    ans = a + b

    # Return the answer.
    return ans


# CALLING THE SUM FUNCTION WITH KEYWORD ARGUMENTS

sum(a=20, b=30)


# CALLING THE SUM FUNCTION WITH POSITIONAL ARGUMENTS

sum(1, 5)