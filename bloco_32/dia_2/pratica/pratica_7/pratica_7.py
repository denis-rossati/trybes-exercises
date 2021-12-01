""" 
O try faz uma tentativa de executar alguma ação
try:
    arquivo = open('arquivo.txt', mode='r')
- Se uma exceção for esperada, o except será executado e o restante to try, ignorado
except OSError:
    print('Arquivo inexistente')
- O else é executado quando o try é feito com sucesso
else:
    print('arquivo manipulado e fechado')
    arquivo.close()
- O finally é destinado à ações de limpeza, sempre será executado independentemente
finally:
    print('tentativa de abrir arquivo')


A exceção OSError é a classe base para operações de I/O
"""

# Dado um arquivo contendo estudantes e suas respectivas notas, escreva um 
# programa que lê todas essas informações e filtre mantendo somente as 
# pessoas que estão reprovadas, e escreva seus nomes em outro arquivo.
# A nota miníma para aprovação é 6.

# levando em conta que estamos na pasta raiz do trybe-exercises:
try:
    notas = open('./bloco_32/dia_2/pratica/pratica_7/arquivo_pratica_7.txt', mode='r')
    alunos_aprovados = open('./bloco_32/dia_2/pratica/pratica_7/arquivo_pratica_7_reprovados.txt', mode='w')
    for linha in notas:
        nota = int(linha.split(' ')[1])
        aluno = linha.split(' ')[0]
        if nota < 6:
            alunos_aprovados.write(f'{aluno}\n')
except OSError:
    print('Erro na execução')
else:
    notas.close()
finally:
    print('Processamento concluído')
