# DECORATORS

'''
A decorator is a function that receives another function 
and adds extra behaviour before or after it runs.
The original function does not need to be changed.
'''


def my_deco(func):

    # This inner function receives control when the decorate function is called.
    def wrapper():

        # Code here runs BEFORE the original function.
        print("Starting the function...")

        # Call the original function that was passed into the decorator.
        func()

        # Code here runs AFTER the original function.
        print("The function has finished")

    # Return the wrapper function.
    # Notice that we return the function itself, not wrapper().
    return wrapper


# A NORMAL FUNCTION

def hello():

    # This is the original behaviour of the function.
    print("Hello world function executes")
    print("Hello World")


# APPLYING THE DECORATOR

@my_deco
def french_hello():

    # This is the original behaviour of this function.
    print("French hello function")
    print("Bonjour World")


# Calling french_hello() actually calls the wrapper function.
french_hello()