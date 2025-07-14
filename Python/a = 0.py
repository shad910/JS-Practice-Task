#ex

a = 0
b = 9
try:
    if (a<0 or b<0):
     raise ZeroDivisionError
    print(a/b)
except ZeroDivisionError:
    print("Enter the vaild integer value")