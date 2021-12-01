import json
import random
from operator import itemgetter

# Modifique o exercício anterior para que as palavras sejam lidas de um arquivo.
# Considere que o arquivo terá cada palavra em uma linha.

with open('./palavras.json', mode='r') as file:
    # https://stackoverflow.com/questions/2955412/destructuring-bind-dictionary-contents
    params = json.load(file)
    palavras = itemgetter('palavras')(params)

palavra_escolhida = random.choice(palavras)

palavra_embaralhada = list(palavra_escolhida)
random.shuffle(palavra_embaralhada)
palavra_embaralhada = ''.join(palavra_embaralhada)

chances = 3
ganhou = False

print(f'A palavra é: {palavra_embaralhada}')

while chances > 0 and not ganhou:
    escolha = input('Qual o seu palpite? ')
    if escolha.lower() != palavra_escolhida.lower():
        chances -= 1
        print('Você errou. Tente de novo')
    else:
        ganhou = True

if (ganhou):
    print('Parabéns, vocẽ acertou :D')
else:
    print(f'Que pena, a palavra era {palavra_escolhida}')