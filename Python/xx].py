def add_number():

    numbers = []

    for i in range(5):
        number = int(float(input(f"Enter the value {i+1}:")))
        numbers.append(number)
        total = sum(numbers)
    print(f"Your result is: {total}")

add_number()        
