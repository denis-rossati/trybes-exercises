arquivo = open('arquivo.txt', mode='w')

# Só podemos escrever num arquivo após abrirmos ele
arquivo.write('nome idade\n')
arquivo.write('\n')
arquivo.write('Denis 20\n')
arquivo.write('Vitoria 19\n')

# Podemos suprimir a mensagem de escrita do python assim:
print('Saulo 18\n', file=arquivo)

lines = ['Naia 40\n', 'Vanildo 71\n']

# podemos escrever listas também
arquivo.writelines(lines)

# Devemos fechar arquivos pois temos limites de quantos arquivos podemos abrir de uma só vez
# Além disso, por escrevermos em disco através de buffers, fechando o arquivo
# garantimos que tudo que foi escrito será persistido
arquivo.close()


# e podemos ler, claro

arquivo = open('arquivo.txt', mode='r')

conteudo = arquivo.read()

print(conteudo)

arquivo.close()

# Podemos ler um arquivo linha por linha também:

arquivo = open('arquivo.txt', mode='r')

for linha in arquivo:
    print(linha)

arquivo.close()

# Também podemos ler arquivos binários

arquivo = open("arquivo.dat", mode="wb")  # o b é o mode para binário
arquivo.write(b"C\xc3\xa1ssio 30")  # o prefixo b em uma string indica que seu valor está codificado em bytes
arquivo.close()

arquivo = open("arquivo.dat", mode="rb")
conteudo = arquivo.read()
print(conteudo)  # conteudo saída: b'C\xc3\xa1ssio 30'
arquivo.close()  # não podemos esquecer de fechar o arquivo
