#Problem No.4
#Find the Circle Area
#With Function

import math

def Circle_Area():
    
    Radius = int(float(input("Enter the value of Base:\n")))
    
    Area = math.pi*(Radius**2)
    print("The Area of the Circle is",Area)
    
Circle_Area()