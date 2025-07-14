#Problem No. 7
#Find the area of Isosceles Triangle
#With Function

import math

def Isosceles_Triangle():
    
    A = int(float(input("Enter the valud of A:\n")))
    
    B = int(float(input("Enter the value of B:\n")))
    
    C = int(float(input("Enter the vale of C:\n")))

    if (A+B)>C and (B+C)>A and (C+A)>B :
        S = (A+B+C)/2
        Area = math.sqrt(S*(S-A)*(S-B)*(S-C))
        print("The area of the Isoisosceles Triangle is",Area)
        
    else:
        print("Triangle is not possible")

        
Isosceles_Triangle()