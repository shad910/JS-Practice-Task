#Problem No 18-File Opening and Closing Program

"""
w+ for write and read
r+ for read 
a+ for add new text or doc
"""

file = open("info.txt","w+")
file.write("Iam a student of Computer Department. ")
file.close

file = open("info.txt","a+")
file.write("My college name is Sherpur Polytechnic Institute. ")
file.close

file = open("info.txt","r+")
print(file.read())