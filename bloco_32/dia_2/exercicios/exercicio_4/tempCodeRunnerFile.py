pen('./books.json') as file:
    book_list = json.load(file)
    print(