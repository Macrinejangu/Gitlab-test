'''
Polymorphism means:
The same action or method name can behave differently depending on the object using it.

A simple way to remember it:
"One action, many forms."

'''


class Shape:

    def __init__(self, shape_name):
        self.shape_name = shape_name

    def describe(self):
        print(f"This is a {self.shape_name}")

    def display_info(self):
        print("-----------------------------")
        print(f"Shape: {self.shape_name}")
        print(f"Area: {self.area()}")
        print(f"Perimeter: {self.perimeter()}")
        print("-----------------------------")

    # Method for calculating area
    # Each specific shape will provide its own calculation.
    def area(self):
        print(f"For shape {self.shape_name}, area calculation is missing")

    def perimeter(self):
        print(f"For shape {self.shape_name}, perimeter calculation is missing")



# Rectangle class inherits from Shape


class Rectangle(Shape):

    def __init__(self, length, width):

        # Shape name comes from the parent class.
        # super() accesses the parent class.
        super().__init__(shape_name="Rectangle")

        # These properties belong specifically to Rectangle.
        self.length = length
        self.width = width

    # Rectangle calculates area its own way.
    def area(self):
        return self.length * self.width

    # Rectangle calculates perimeter its own way.
    def perimeter(self):
        return 2 * (self.length + self.width)



# Triangle class inherits from Shape


class Triangle(Shape):

    def __init__(self, base, height, side1, side2, side3):

        # Shape name comes from the parent class.
        super().__init__(shape_name="Triangle")

        # Properties specific to Triangle.
        self.base = base
        self.height = height
        self.side1 = side1
        self.side2 = side2
        self.side3 = side3

    # Triangle calculates area differently from Rectangle.
    def area(self):
        return 0.5 * self.base * self.height

    # Triangle calculates perimeter differently from Rectangle.
    def perimeter(self):
        return self.side1 + self.side2 + self.side3


# Square class inherits from Rectangle


class Square(Rectangle):

    def __init__(self, side):

        # A square is a special type of rectangle.
        # Both length and width are equal to the side.
        super().__init__(length=side, width=side)

        # Change the inherited shape name.
        self.shape_name = "Square"

        # Store side separately for easier reference.
        self.side = side


# Creating Rectangle object


r1 = Rectangle(length=20, width=12)

print("Shape name:", r1.shape_name)
print("Area is:", r1.area())
print("Perimeter is:", r1.perimeter())

r1.describe()
r1.display_info()



# Creating Square object


s1 = Square(side=35)

print("Shape name:", s1.shape_name)
print("Area is:", s1.area())
print("Perimeter is:", s1.perimeter())

s1.describe()
s1.display_info()


# Creating Triangle object


t1 = Triangle(
    base=20,
    height=30,
    side1=20,
    side2=25,
    side3=30
)

print("Shape name:", t1.shape_name)
print("Area is:", t1.area())
print("Perimeter is:", t1.perimeter())

t1.describe()
t1.display_info()



# POLYMORPHISM

# All these objects use the SAME method names:
# area()
# perimeter()
#
# But each object performs those methods differently.
#
# Rectangle.area() uses:
# length * width
#
# Triangle.area() uses:
# 0.5 * base * height
#
# Square.area() inherits Rectangle's area method,
# because a square uses length * width too.
#
# This is POLYMORPHISM:
#
# Same method name.
# Different behaviour depending on the object.


shapes = [
    Rectangle(length=10, width=5),
    Triangle(
        base=10,
        height=8,
        side1=10,
        side2=8,
        side3=9
    ),
    Square(side=7)
]


# Python goes through each object.
for shape in shapes:

    print("-----------------------------")
    print(f"Shape: {shape.shape_name}")

    # POLYMORPHISM HAPPENS HERE.
    #
    # The method name is always area().
    # But Python uses the correct area() method
    # depending on the object.
    print(f"Area: {shape.area()}")

    # The same thing happens here.
    # Each shape calculates perimeter differently.
    print(f"Perimeter: {shape.perimeter()}")