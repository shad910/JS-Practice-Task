#Problem No. 6.2
#Find the Largest Number
#With Function

def Largest_Number():

  A = int(float(input("Enter the value of A:\n")))

  B = int(float(input("Enter the value of B:\n")))

  C = int(float(input("Enter the value of C:\n")))
  
  if (A>B) and (A>C):
      print("A is the Largest Number")

  elif (B>A) and (B>C):
      print("B is the Largest Number")

  else:
    print("C is the Largest Number")

Largest_Number()