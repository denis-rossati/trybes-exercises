from array import array
from inspect import CORO_CLOSED
from random import shuffle
from typing import Coroutine
from pratica_ordenação import bubble_sort, merge_sort, selection_sort, insertion_sort
from cronometro import Cronometro

# Dado um array com os seguintes elementos ["zebra", "macaco", "elefante", "arara", "javali"] , após duas iterações utilizando bubble sort , como estaria este array?
# primeira iteração: ["macaco", "elefante", "arara", "javali", "zebra"]
# segunda iteração: [ "elefante", "arara", "javali", "macaco", "zebra"]

# Demonstre o passo a passo, do processo de mistura, de um array sendo ordenado, utilizando merge sort . Comece o passo a passo a partir da linha abaixo:
# 7 3    5 4    6 8    2 1
# 3 7    4 5    6 8    1 2
#   3 4 5 7      1 2 6 8
#     1 2 3 4 5 6 7 8

# Execute os algoritmos de ordenação por seleção e inserção, para as entradas de dados ordenadas, inversamente ordenadas e aleatórias, em seguida, compare-os. Faça testes para entradas de tamanho 10.000, 100.000, 1.000.000.
ordenados = list(range(100))
aleatorios = ordenados[:]
shuffle(aleatorios)

# já fiz esses algoritmos no arquivo pratica_ordenacao
print(selection_sort(aleatorios))
print(insertion_sort(aleatorios))

# Compare o tempo de execução do algoritmo merge_sort e bubble_sort para uma entrada de 10.000 valores aleatórios. Explique através de análise de complexidade o que ocorre.
ordenados = list(range(10000))
aleatorios = ordenados[:]
shuffle(aleatorios)

with Cronometro("bubble sort") as cronometrar:
    bubble_sort(aleatorios)

with Cronometro("merge sort"):
    merge_sort(aleatorios)

# Converta o algoritmo recursivo de busca binária em iterativo.
# meu algoritmo original está na pasta pratica_busca
def binary_search(arr, value):
    low_index = 0
    high_index = len(arr) - 1
    while high_index >= low_index:
        middle_index = (high_index + low_index) // 2
        if arr[middle_index] == value:
            return middle_index
        elif arr[middle_index] > value:
            high_index = middle_index - 1
        else:
            low_index = middle_index + 1
    raise ValueError(f"{value} is not in list")

# Para descobrirmos qual commit introduziu um erro no sistema, precisamos voltar no tempo verificando os commits antigos, de modo a descobrir um commit em que os testes falham. Supondo que isto será representado como um array de booleanos , descubra o índice onde o erro ocorreu pela primeira vez.
# entrada: [True, True, True, True, False, False, False]  -> saída: 4
# entrada: [True, True, False, False, False, False, False] -> saída: 2

# Na matéria de hoje haviam o binary e o linear search.
# Eu não acho que o binary_search seja bom porque imagino que possam haver casos em que o array é divido pela metade
# [False, True, False, False, False]
#                /\
# Mas esse não é o primeiro elemento. Logo, acho que o linear seja mais apropriado

def linear_search(arr, value):
    for index, element in enumerate(arr):
        if element == value:
            return index
    return False
print(linear_search([True, True, True, True, False, False, False], False))
print(linear_search([True, True, False, False, False, False, False], False))
