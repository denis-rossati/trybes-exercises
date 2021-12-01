import sys

# Alguns tipos de saída de dados com print:

# O argumento "sep" define um separador entre os outros argumentos
print('Denis', 'Ludmila', 'Thiago', 'João', sep=' - ')

# Cada print é uma linha, mas podemos definir mais de uma linha usando \n
print('Duas', 'linhas', sep='\n')

# O argumento "end" define um valor que será usado no fim de um print
print('Tudo tem um', end=' fim\n')

# Podemos também modificar a saída padrão de erros
err = 'Arquivo não encontrado'
print(f'Erro: {err}', file=sys.stderr)

