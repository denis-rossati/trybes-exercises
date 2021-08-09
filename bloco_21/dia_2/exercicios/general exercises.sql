/*
SELECT movies.id, movies.title, box.international_sales, box.domestic_sales 
FROM Pixar.BoxOffice AS box
INNER JOIN Pixar.Movies	AS movies
ON movies.id = box.movie_id; 

SELECT box.international_sales
FROM Pixar.Movies AS movies
INNER JOIN Pixar.BoxOffice AS box
ON movies.id = box.movie_id
AND box.international_sales > box.domestic_sales;

SELECT movies.title, box.rating
FROM Pixar.BoxOffice AS box
INNER JOIN Pixar.Movies AS movies
ON box.movie_id = movies.id;

SELECT theater.name, theater.location, movies.title
FROM Pixar.Theater AS theater
LEFT JOIN Pixar.Movies as movies
ON movies.theater_id = theater.id
ORDER BY theater.name ASC;

SELECT theater.name, movies.title
FROM Pixar.Theater AS theater
RIGHT JOIN Pixar.Movies AS movies
ON movies.theater_id = theater.id;

SELECT
box.rating,
(
SELECT movies.title
FROM Pixar.Movies AS movies
WHERE box.movie_id = movies.id
)
FROM Pixar.BoxOffice AS box
WHERE rating > 7.5;


SELECT movies.title, box.rating
FROM Pixar.Movies AS movies
INNER JOIN BoxOffice AS box
ON movies.id = box.movie_id
WHERE box.rating > 7.5;

SELECT movies.title,
movies.year,
(
SELECT box.rating
FROM Pixar.BoxOffice AS box
WHERE movies.id = box.movie_id
)
FROM Pixar.Movies AS movies
WHERE movies.year > 2009;

SELECT
	movies.title,
	movies.year
FROM Pixar.Movies AS movies
INNER JOIN Pixar.BoxOffice AS box
ON box.movie_id = movies.id
WHERE movies.year > 2009; 

SELECT
theater.name, theater.location 
FROM Pixar.Theater AS theater
WHERE EXISTS (
	SELECT theater.name
    FROM Pixar.Movies AS movies
    WHERE movies.theater_id = theater.id
);

SELECT
theater.name, theater.location 
FROM Pixar.Theater AS theater
WHERE NOT EXISTS (
	SELECT theater.name
    FROM Pixar.Movies AS movies
    WHERE movies.theater_id = theater.id
);

SELECT 
movies.title
FROM Pixar.Movies AS movies
WHERE movies.length_minutes > 110
AND (
SELECT
box.international_sales
FROM Pixar.BoxOffice AS box
WHERE movies.id = box.movie_id
) > 500000000
OR (
SELECT 
box.domestic_sales
FROM Pixar.BoxOffice AS box
WHERE movies.id = box.movie_id
) > 500000000;
*/
