USE sakila;
CREATE VIEW film_info AS
SELECT a.actor_id, CONCAT(a.first_name, ' ',a.last_name) AS Actor, f.title
FROM film_actor fa
INNER JOIN actor a
ON a.actor_id = fa.actor_id
INNER JOIN film f
ON f.film_id = fa.film_id
ORDER BY Actor;