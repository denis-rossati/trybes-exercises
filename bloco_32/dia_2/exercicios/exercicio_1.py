# Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida.

# Tentei fazer o exercicio sem usar split ou reverse para ficar mais desafiador

nome = input('Qual o seu nome?')
nome_len = range(len(nome) - 1, -1, -1)
for index in nome_len:
    nome_sliced = slice(index + 1)
    print(nome[nome_sliced])
