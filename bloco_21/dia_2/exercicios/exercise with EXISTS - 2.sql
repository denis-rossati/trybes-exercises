SELECT books.Id, books.title
FROM hotel.Books AS books
WHERE EXISTS (
	SELECT *
    FROM hotel.Books_Lent AS rental
    WHERE rental.book_id = books.Id
    AND title LIKE "%lost%"
);
