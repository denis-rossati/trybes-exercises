USE sakila;
SELECT f.title, l.language_id, l.name
FROM film f
INNER JOIN language l
ON f.language_id = l.language_id;