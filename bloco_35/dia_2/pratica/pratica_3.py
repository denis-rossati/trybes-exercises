# Faça um algoritmo recursivo de soma. Esse algoritmo deve receber um número de parâmetro e deve somar todos os números antecessores a ele.
def sum(number):
  if number == 1:
    return number
  else:
    return number + sum(number - 1)
