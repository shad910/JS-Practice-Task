#Problwm No. 5.1
#Fahrenheit to Celsius
#With Function 

def F_to_C():
    
    Fahrenheit = int(float(input("Enter the value of Fahrenheit:\n")))
    
    Celsius = ((Fahrenheit-32)*(5/9))
    print("Fahrenheit converted to Celsius and the result is ",Celsius)
    
F_to_C()