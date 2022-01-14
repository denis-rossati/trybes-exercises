# Exercício 2 Suponha que se está escrevendo uma função para um jogo de batalha naval. Dado um array bidimensional com n linhas e m colunas, e um par de coordenadas x para linhas e y para colunas, o algoritmo verifica se há um navio na coordenada alvo. Por exemplo:

# R:
# há 20 iterações por uma entrada de 20 elementos, 50 iterações por 50 elementos e por aí vai
# como é uma complexidade linear, acredito que seja O(n)
entrada = [ 0, 0, 0, 0, 1,
			0, 0, 0, 0, 1,
			1, 1, 1, 1, 1,
			0, 0, 0, 1, 0, ]

def cartographer(map):
	new_map = []
	new_lat = []
	recount_coord = 0
	iteracoes = 0
	for location in map:
		new_lat.append(location)
		recount_coord += 1
		if recount_coord >= 5:
			new_map.append(new_lat)
			new_lat = []
			recount_coord = 0
		iteracoes+= 1
	return new_map

def battle(map, coordX, coordY):
	map = cartographer(map)
	latitude = map[coordX]
	if latitude[coordY] == 1:
		return True
	return False

assert battle(entrada, 0, 4) is True
assert battle(entrada, 2, 2) is True
assert battle(entrada, 3, 0) is False
assert battle(entrada, 1, 0) is False
