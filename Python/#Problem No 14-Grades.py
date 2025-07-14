#Problem No. 14
#Exam grades
#With Function

def Grades():
    
    N = int(float(input("Enter the marks:\n")))
    
    if(N>100):
        print("Don't be over smart your number are not above 100")
    
    elif(N>=90):
        print("Congratulations,you got A++")
        
    elif(N>=80):
        print("Congratulations, you got A+")
        
    elif(N>=70):
        print("Congratulations, you got A")
        
    elif(N>=60):
        print("Congratulations, you got A-")
        
    elif(N>=50):
        print("You got B")
        
    elif(N>=40):
        print("You got C")
        
    elif(N>=34.5):
        print("You got D")
        
    else:
        print("You are fail, try again to have a better result.")

Grades()