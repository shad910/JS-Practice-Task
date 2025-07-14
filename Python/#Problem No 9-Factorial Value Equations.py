#Problem No. 9
#Factorial Value Equations
#With Function 

def Factorial_Value():

    n=int(input("Enter the value:\n"))
    fact=1
    
    if(n<0):
        print("This is the negative number")
        
    elif(n==0):
        print(fact)
    
    else:
        for i in range(1, n+1):
            fact=fact*i
        print(fact)

Factorial_Value()