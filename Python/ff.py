def Factorial_Value():

    Factorial = 1
    Number = int(float(input("Enter the value: ")))

    if(Number<0):
        print("You entered a negative number.")

    elif(Number==0):
        print(Factorial)

    else:
        for i in range (1,1+Number):
            Factorial = Factorial*i
            print(Factorial)

Factorial_Value()                   
