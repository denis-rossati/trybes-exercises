def fibonacci(target):
    fibonacci_sequence = [0, 1]
    while all(number < target for number in fibonacci_sequence):
        fibonacci_number = fibonacci_sequence[-1] + fibonacci_sequence[-2]
        fibonacci_sequence.append(fibonacci_number)
    return fibonacci_sequence[:-1]

print(fibonacci(20))