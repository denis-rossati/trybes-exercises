USE sakila;
CREATE VIEW film_with_categories AS 
SELECT film.title, category.category_id, category.name
FROM sakila.film_category AS film_category
INNER JOIN sakila.category AS category
ON film_category.category_id = category.category_id
INNER JOIN sakila.film AS film
ON film.film_id = film_category.film_id
ORDER BY title ASC;
