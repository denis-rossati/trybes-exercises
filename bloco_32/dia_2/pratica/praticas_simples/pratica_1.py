import random

random_number = random.randint(1, 10)
guess = ""

while guess != random_number:
    guess = int(input("Qual seu palpite?"))

print("Você adivinhou!")
