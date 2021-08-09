USE sakila;
DELIMITER $$;

CREATE PROCEDURE bringCategorie (IN category_input VARCHAR(20))
BEGIN
SELECT
	 film.title, film.film_id, categories.category_id, categories.name
FROM sakila.film_category AS film_category
INNER JOIN (
	SELECT category.category_id, category.name
    FROM sakila.category AS category
    WHERE category.name = category_input
) AS categories
INNER JOIN (
	SELECT film.title, film.film_id
    FROM sakila.film AS film
) AS film
WHERE film_category.film_id = film.film_id;
END $$;

DELIMITER ;
