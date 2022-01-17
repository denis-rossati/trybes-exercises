# Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n).

from operator import length_hint


def not_recursive_even(n):
    how_many_evens = 0
    for number in range(1, n):
        if number % 2 == 0:
            how_many_evens += 1
    return how_many_evens


# Transforme o algoritmo criado acima em recursivo.

def recursive_even(n):
    if n == 1:
        return 0
    return 1 + recursive_even(n - 1) if n % 2 == 0 else recursive_even(n - 1)


# Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.

# ficou meio bagunçado :(
def helper_greater_number(l: list, length):
    if length == 1:
        return l[0]
    else:
        greater = helper_greater_number(l, length - 1)
        if greater > l[length - 1]:
            return greater
        return l[length - 1]

def greater_number(l: list):
    length = len(l)
    return helper_greater_number(l, length)

# Escreva um algoritmo recursivo para encontrar o máximo divisor comum ( mdc ) de dois inteiros.

# Não consegui fazer. No gabarito estav assim, entendi nada :B

def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)

