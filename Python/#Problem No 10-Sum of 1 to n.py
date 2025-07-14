#Problem No. 10.2
#sum of 1 to n 

def One_to_n():
    
    n=int(input("Enter the end range value:\n"))
    
    i=0
    sum=0

    while(i<=n):
        sum+=i
        i=i+1
    print("Summation is ",sum)  
    
One_to_n()