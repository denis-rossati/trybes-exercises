# Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertical. 

nome = input('Digite seu nome.')

nome_a_ser_exibido = ""

for letra in nome:
    # Usar "print(letra)" seria muito fácil
    nome_a_ser_exibido += f'{letra}\n'

print(nome_a_ser_exibido)
