# Exercício 5 Utilize o módulo random da linguagem Python para gerar um array com 100 números. Cada um desses números deve ser a média de dez números gerados aleatóriamente. Qual é a ordem de complexidade de tempo e de espaço deste programa?
import random

def get_average(random_list):
  return int(sum(random_list)/len(random_list))

# temos 10 iterações para cada iteração de 0 a 100. Isso é 10 * 100, como nem o 10 nem o 100 mudam, ou a saída é variável, temos uma complexidade de O(1)
random_list = [get_average([random.randint(0, 100) for _ in range(0, 10)]) for _ in range(0, 100)]
