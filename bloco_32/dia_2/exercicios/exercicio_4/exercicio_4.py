import json
import csv
from operator import itemgetter

# Dado o arquivo no formato JSON, leia seu conteúdo e calcule a porcentagem de livros em cada categoria, em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato CSV.

try:
    with open('./books.json') as file:
        params = json.load(file)
        books = itemgetter('books')(params)
except Exception:
    print('Alguma coisa deu errada :P')

times_a_categorie_appear = {}
percentage_of_each_categorie = {}

for book in books:
    categories = itemgetter('categories')(book)
    for categorie in categories:
        if categorie in times_a_categorie_appear:
            times_a_categorie_appear[categorie] += 1
        else:
            times_a_categorie_appear[categorie] = 1

for categorie in times_a_categorie_appear:
    value = times_a_categorie_appear[categorie]
    percentage_of_each_categorie[categorie] = value / len(books)

with open('categories.csv', mode='w') as file:
    writer = csv.writer(file)
    headers = ['categorie', 'percentage']
    writer.writerow(headers)
    for key, value in percentage_of_each_categorie.items():
        writer.writerow([key, value])
