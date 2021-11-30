import math

# Crie uma função que receba dois números e retorne o maior deles.


def bigger_number(a, b):
    a if a > b else b

# Calcule a média aritmética dos valores contidos em uma lista.


def arithmetic_average(list):
    sum = 0
    for item in list:
        sum += item
    return sum / len(list)

# Faça um programa que, dado um valor n qualquer, tal que n > 1
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n


def astherisc_square(number):
    row = ' * ' * number

    for i in range(number):
        print(row)

# Crie uma função que receba uma lista de nomes e retorne o nome com a
# maior quantidade de caracteres.


def show_biggest_name(name_list):
    biggest_name = ''
    for name in name_list:
        if len(name) > len(biggest_name):
            biggest_name = name
    print(f"O maior nome é {biggest_name}")

# Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados
# e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.
# Crie uma função que retorne dois valores em uma tupla contendo a quantidade
# de latas de tinta a serem compradas e o preço total a partir do tamanho de
# uma parede(em m²).


def how_many_ink(wall_size):
    can_of_ink = math.ceil(wall_size / 3)
    price = can_of_ink * 80
    return (can_of_ink, price)

# Crie uma função que receba os três lado de um triângulo e informe qual o
# tipo de triângulo formado ou "não é triangulo" , caso não seja possível
# formar um triângulo.


def type_of_triangle(sideA, sideB, sideC):
    if (sideA == sideB == sideC):
        return 'Triângulo Equilátero: três lados iguais'
    elif (sideA == sideB or sideA == sideC or sideB == sideC):
        return 'Triângulo Isósceles: quaisquer dois lados iguais'
    else:
        return 'Triângulo Escaleno: três lados diferentes'

# Dada uma lista, descubra o menor elemento.


def lesser_number(list):
    lesser_number = list[0]
    for number in list:
        if number < lesser_number:
            lesser_number = number
    return lesser_number


# Faça um programa que, dado um valor n qualquer, tal que n > 1 , imprima na
# tela um triângulo retângulo com n asteriscos de base.

def print_triangle(n):
    for index in range(n + 1):
        row = '* ' * index
        print(row)

# Crie uma função que receba um número inteiro N e retorne o somatório de
# todos os números de 1 até N . Por exemplo, para N = 5 , o valor esperado
# será 15 .


def special_sum(n):
    result = 0
    for number in range(n + 1):
        result += number
    return result

# Um posto está vendendo combustíveis com a seguinte tabela de descontos:
# Álcool:
#    - Até 20 litros, desconto de 3% por litro;
#    - Acima de 20 litros, desconto de 5% por litro.
#  Gasolina:
#    - Até 20 litros, desconto de 4% por litro;
#    - Acima de 20 litros, desconto de 6% por litro.
# Escreva uma função que receba o número de litros vendidos, o tipo de
# combustível (codificado da seguinte forma: A - álcool, G - gasolina), e
# retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro da
# gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.


def calc_discount_alcohol(above_twenty, liters):
    price = liters * 1.90
    if (above_twenty):
        return 95/100 * price
    else:
        return 97/100 * price


def calc_discount_gas(above_twenty, liters):
    price = liters * 2.50
    print(price)
    if (above_twenty):
        return 94/100 * price
    else:
        return 96/100 * price


def calc_price(liters, fuel):
    if (fuel == 'A'):
        if (liters > 20):
            return calc_discount_alcohol(True, liters)
        else:
            return calc_discount_alcohol(False, liters)
    if (fuel == 'G'):
        if (liters > 20):
            return calc_discount_gas(True, liters)
        else:
            return calc_discount_gas(False, liters)
    return 'Please inform a valid fuel.'

print(calc_price(10, 'G'))
