#Problem No 11.1
#Print Even Number (1 to n)
#With Function

def Even_Number():
    
    n = int(input("Enter the end of Range:\n"))
    
    print("Printing of Even Number Series:\n")
    
    for i in range(1,n+1):
        if not(i%2):
            print(i)
            
Even_Number()