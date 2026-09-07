'''
Inheritance
Inheritance means one class can receive the features and behaviors of another class.
Like a child inheriting traits from a parent.
So Inheritance = creating a new class based on an existing class, so you do not have to rewrite the same code again.
And it helps you to not repeat yourself (DRY=>Don't Repeat Yourself)
'''

class Rectangle:

    def __init__(self,length,width):
        self.length=length
        self.width=width
        self.shape_name="Rectangle"

    def area(self):
        area=self.length*self.width
        print(f"For rectangle length {self.length} and width {self.width} is {area}")


class Square:
    def __init__(self,side):
        self.length=side
        self.width=side
        self.shape_name="Square"

    def area(self):
        area=self.length*self.width
        print(f"For square of length {self.length} and width {self.width} is area; {area}")  

r1=Rectangle(length=20,width=10)
r1.area()

print(r1.shape_name)

s1=Square(side=10)
s1.area()