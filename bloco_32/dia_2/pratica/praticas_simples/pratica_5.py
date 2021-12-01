# Escreva um programa que receba vários números naturais e calcule a soma
# desses valores. Caso algum valor da entrada seja inválido, por exemplo uma
# letra, uma mensagem deve ser exibida, na saída de erros, no
# seguinte formato: "Erro ao somar valores, {valor} é um valor inválido".
# Ao final, você deve imprimir a soma dos valores válidos.

import sys

entrada_do_usuario = input('Insira números naturais separados por espaço')

caracteres = entrada_do_usuario.split(' ')

inteiros = []

for caracter in caracteres:
    if (not caracter.isdigit()):
        print(f'Erro ao somar valores, {caracter} é um valor inválid')
    else:
        inteiros.append(int(caracter))

print(sum(inteiros))
