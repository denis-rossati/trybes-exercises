from datetime import datetime

# COMPLEXIDADE DE TEMPO LINEAR
# Qual a Ordem de Complexidade (complexidade de tempo) do algoritmo abaixo? E a complexidade de espaço?
def multiply_array(numbers):
    result = 0
    for number in numbers:
            result *= number

    return result

# - O algoritmo tem uma complexidade de tempo linear O(n), pois se temos uma entrada, o tempo de execução do algoritmo é X, mas se essa entrada for 100x maior, o tempo de execução será proporcional, ou seja, n * 100
# - Mas para a complexidade de espaço, o processamento é adicionar o valor a uma variavel e o retorno é sempre 0, sendo assim, a complexidade de espaço é O(1)  


# COMPLEXIDADE DE TEMPO QUADRATICA
# Meça o tempo de execução de um algoritmo e, mudando o tamanho das entradas, veja como, se você aumenta a entrada em n vezes, o tempo de execução aumenta em n² vezes!
def multiply_arrays(array):
    result = []
    number_of_iterations = 0
    before_algorithm = datetime.utcnow()
    for number1 in array:
        print(f'Array 1: {number1}')
        for number2 in array:
            print(f'Array 2: {number2}')
            result.append(number1 * number2)
            number_of_iterations += 1
    after_algorithm = datetime.utcnow()
    time_passed = after_algorithm - before_algorithm
    print(f'Tempo passado: {time_passed}')
    print(f'{number_of_iterations} iterações')
    return result


meu_array = [1,2,3,4,5,6,7,8,9,10]

multiply_arrays(meu_array)

# Faça um algoritmo qualquer com três loops aninhados um dentro do outro. Entenda como ele terá uma complexidade de O(n³) !
def more_multplications(array):
    result = []
    number_of_iterations = 0
    before_algorithm = datetime.utcnow()
    for number1 in array:
        print(f'Array 1: {number1}')
        for number2 in array:
            print(f'Array 2: {number2}')
            for number3 in array:
              result.append(number1 * number2 * number3)
              number_of_iterations += 1
    after_algorithm = datetime.utcnow()
    time_passed = after_algorithm - before_algorithm
    print(f'Tempo passado: {time_passed}')
    print(f'{number_of_iterations} iterações')
    return result

  
meu_array = [1,2,3,4,5]

more_multplications(meu_array)


# COMPLEXIDADE LOGARITIMICA
# A estrutura deve estar ordenada para que a busca binária funcione
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def binary_search_iterative(array, element):
    mid = 0
    start = 0
    end = len(array)
    step = 0

    while (start <= end):
        print("Subarray in step {}: {}".format(step, str(array[start: end + 1])))
        step = step + 1
        mid = (start + end) // 2

        if element == array[mid]:
            return mid
        if element < array[mid]:
            end = mid - 1
        else:
            start = mid + 1

    return - 1


print(binary_search_iterative(data, 2))

# Imagine que você recebe dois arrays de tamanho igual, array1 e array2 . Para cada elemento do array1 , realize uma busca binária no array2 . Mostre que a ordem de complexidade do algoritmo resultante é O(n * log n) , ou O(n log n) .
# Não precisa implementar o código aqui

# Acredito que essa complexidade O(n[...]) se dá por fazermos uma iteração para cada elemento de um array, já O([...] * log n) se dá pelo algoritmo logaritimco envolvido no processo.