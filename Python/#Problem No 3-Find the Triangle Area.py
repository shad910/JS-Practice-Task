#Problem No. 3
#Find the Triangle Area
#With Function

def Triangle_Area():
    
    Base = int(float(input("Enter the value of Base:\n")))
    
    Height = int(float(input("Enter the value of Height:\n")))
    
    Area = 0.5*Base*Height
    print("The Area of the Triangle is",Area)
    
Triangle_Area()