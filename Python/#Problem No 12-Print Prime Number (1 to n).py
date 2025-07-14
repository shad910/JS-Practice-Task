#Problem No 12
#Print Prime Number (1 to n)
#With Function

def Prime_Number():
    
    LV = int(input("Enter the Lowest Range Value:\n"))
    UV = int(input("Enter the Upper Range Value:\n"))
    
    print("Printing of Prime Number in range:\n")
    
    for number in range(LV,UV+1):
        
        if(number>1):
            
            for i in range(2,number):
                
                if(number%i==0):
                    break 
                    
                else:
                    print(number)
            
Prime_Number()