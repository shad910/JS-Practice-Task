#Problwm No. 5.2
#Celsius to Fahrenheit
#With Function 

def C_to_F():
    
    Celsius = int(float(input("Enter the value of Celsius:\n")))
    
    Fahrenheit = ((Celsius*(9/5))+32)
    print("Celsius converted to Fahrenheit and the result is ",Fahrenheit)
    
C_to_F()