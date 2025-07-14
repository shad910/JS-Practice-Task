#Problem No 17-Solving Quadratic equations using function
#Quadratic1

def Quadratic(a,b,c):
    import math
    d = (b**2)-(4*a*c)

    if (d<0):
        print("Roots are imaginary.")

    else:
        X1 = ((-b+math.sqrt(d))/(2*a))
        X2 = ((-b-math.sqrt(d))/(2*a))
        print("Roots are real and the values are: ",X1," ",X2)

Quadratic(10,20,30)
Quadratic(2,7,3)
Quadratic(4,4,4)
Quadratic(1,4,4)
Quadratic(1,5,5)

#This file will be save as Quadratic1
#We will create another python file name as Quadratic2
#The second python file will be use for import module and calling function

