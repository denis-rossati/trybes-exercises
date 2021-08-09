USE sakila;
DELIMITER $$

CREATE FUNCTION ReturnFilmTitle(id INT)
RETURNS VARCHAR(30) READS SQL DATA
BEGIN
	DECLARE filmTitle VARCHAR(30);
	SELECT film.title
    FROM sakila.film AS film
    WHERE id = film.film_id
    INTO filmTitle;
    RETURN filmTitle;
END $$

DELIMITER ;
