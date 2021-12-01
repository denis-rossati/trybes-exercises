import random

# Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma
# palavra que será mostrada com as letras embaralhadas.
# O programa terá uma lista de palavras e escolherá uma aleatoriamente.
# O jogador terá três tentativas para adivinhar a palavra. Ao final a palavra
# deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.

lista_palavras = [
    'maça',
    'banana',
    'pera',
    'uva',
    'abacaxi',
    'mamao',
    'abacate',
]

palavra_escolhida = random.choice(lista_palavras)

# https://stackoverflow.com/questions/3182964/shuffling-a-word
palavra_embaralhada = list(palavra_escolhida)
random.shuffle(palavra_embaralhada)
palavra_embaralhada = ''.join(palavra_embaralhada)

chances = 3
ganhou = False

print(f'A palavra é: {palavra_embaralhada}')

while chances > 0 and not ganhou:
    escolha = input('Qual o seu palpite? ')
    if escolha != palavra_escolhida:
        chances -= 1
        print('Você errou. Tente de novo')
    else:
        ganhou = True

if (ganhou):
    print('Parabéns, vocẽ acertou :D')
else:
    print(f'Que pena, a palavra era {palavra_escolhida}')