#Problem No. 6.1
#Find the Smallest Number
#With Function

def Smallest_Number():

    A = int(float(input("Enter the value of A:\n")))

    B = int(float(input("Enter the value of B:\n")))

    C = int(float(input("Enter the value of C:\n")))

    if (A<B) and (A<C):
      print("A is the Smallest Number")

    elif (B<A) and (B<C):
      print("B is the Smallest Number")

    else:
     print("C is the Smallest Number")

Smallest_Number()