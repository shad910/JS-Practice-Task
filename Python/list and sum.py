
#list 5 numbers sum

def add_numbers():
    numbers = []
    
    for i in range(5):

        num = int(float(input(f"Enter number {i+1}:")))
        numbers.append(num)
        total = sum(numbers)
        
    print(f"The sum of the numbers is:{total}")

add_numbers()       