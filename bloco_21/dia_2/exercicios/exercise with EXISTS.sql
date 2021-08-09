SELECT books.Id, books.Title
	FROM hotel.Books AS books
WHERE NOT EXISTS (
	SELECT * 
		FROM hotel.Books_Lent AS rental
	WHERE rental.book_id = books.Id
);