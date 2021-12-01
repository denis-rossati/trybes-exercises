import json

with open('./bloco_32/dia_2/pratica/pratica_9/pokemons.json') as file:
    pokemons = json.load(file)['results']

water_types = [
    pokemon for pokemon in pokemons if 'Water' in pokemon['type']
]

with open('water_pokemons.json', mode='w') as file:
    file.write(json.dumps(water_types))
# ou
    json.dump(water_types)

# "with" é uma palavra chave para context e nomeação do nosso contexto
# com a palavra chave "as". Com o with em nosso contexto, não precisamos
# nos preocupar em fechar o arquivo. O python consegue lidar com isso por nós