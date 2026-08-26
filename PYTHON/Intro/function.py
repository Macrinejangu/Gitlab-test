#function areaCircle(radius)
#{return 3.142*radius*radius}

#In Python, we use def

def area_circle(radius):
    ans= 3.142*pow(radius,2)
    print(f"for cicle of radius {radius} area is {ans}")
    return

area_circle(20)

new_f=area_circle
new_f(10)

