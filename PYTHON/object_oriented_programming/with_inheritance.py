'''
The basic rules of inheritance

1. The parent class contains shared features
Your Shape class should contain properties and methods that apply to every shape you plan to inherit from it.

2. Child classes inherit from the parent class
You show inheritance by putting the parent class inside parentheses:

3. Child classes can have their own unique features
The parent should not contain properties that only belong to one child.

4. Child classes can use methods from the parent

5. Child classes can add their own methods
'''

class Shape:

    def __init__(self,shape_name):
        self.shape_name=shape_name

    def describe(self):
        print(f"Thus is a {self.shape_name}")

    def display_info(self):
        print("_________________________________")
        print(f"shape: {self.shape_name}")
        print(f"Area: {self.area()}")
        print(f"Perimeter: {self.perimeter()}")
        print("___________________________________")

#inheritance class names(<class inheriting from>)
class Rectangle(Shape):

    def __init__(self,length,width):
        #name shape shape
        #super <class we are inheriting from>
        #self<specific object created from class>
        super().__init__(shape_name="Rectangle")

        self.length=length.self.width=width

    def area(self):
        return self.length*self.width

    def perimeter(self):
        return 2*(self.length+self.width)

r1=Rectangle(length=20,width=12)

print("Shape name", r1.shape_name)
print("Area is", r1.area())
r1.display_info()
