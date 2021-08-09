USE sakila;
DELIMITER $$

CREATE FUNCTION returnTotalFilms(id INT)
RETURNS INT READS SQL DATA
BEGIN
		DECLARE total INT;
        SELECT COUNT(*)
        FROM sakila.film_category AS film_category
        WHERE id = film_category.category_id
        INTO total;
        RETURN total;
END $$

DELIMITER ;
