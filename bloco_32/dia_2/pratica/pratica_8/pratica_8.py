import json

# podemos ler um arquivo.read()

with open('./bloco_32/dia_2/pratica/pratica_8/pokemons.json') as file:
    pokemons = json.loads(file.read())
    for pokemon in pokemons['results']:
        print(pokemon['name'])


# ou podemos ler o arquivo diretamente

with open('./bloco_32/dia_2/pratica/pratica_8/pokemons.json') as file:
    pokemons = json.load(file)
    for pokemon in pokemons['results']:
        print(pokemon['name'])
