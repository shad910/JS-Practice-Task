#Problem No. 8
#Solving Quadratic equations
#With Function

import math

def Quadratic():

    A = int(float(input("Enter the value of A:\n")))

    B = int(float(input("Enter the value of B:\n")))

    C = int(float(input("Enter the value of C:\n")))

    D = (B**2)-(4*A*C)
    
    if (D==0):
        X1= (-B/(2*A))
        print("The roots are real and the values are:\n",X1)
    
    elif(D>0):
        X2 = ((-B+math.sqrt(D))/(2*A))
        X3 = ((-B-math.sqrt(D))/(2*A))
        print("Roots are real and the values are:\n")
        print("X1=",X2)
        print("X2=",X3)

    else:
        print("\n Roots are imaginary ")

Quadratic()