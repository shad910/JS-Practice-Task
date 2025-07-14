#Problem No 11.2
#Print Odd Number (1 to n)
#With Function

def Odd_Number():
    
    n = int(input("Enter the end of Range:\n"))
    
    print("Printing of Odd Number Series:\n")
    
    for i in range(1,n+1):
        if (i%2):
            print(i)
            
Odd_Number()