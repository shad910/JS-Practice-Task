#Problem No. 15
#Leap Year
#With Function

def Leap_Year():

    Year = int(input("Enter the year:\n"))
    
    if(Year%400 == 0) or (Year%100 != 0) and (Year%4 == 0):
        print("The given year is leap year")
        
    else:
        print("The given year is not leap year")

Leap_Year()