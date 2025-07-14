#Problem No. 13
# Identify the number is an Even or an Odd Number
#With Function

def identify():
    
    N=int(input("Enter the number:\n"))
    
    if(N%2 == 0):
        print("You entered an Even Number")
    else:
        print("You entered an Odd Number")
        
identify()