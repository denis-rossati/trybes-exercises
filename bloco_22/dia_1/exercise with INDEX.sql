USE sakila;
CREATE FULLTEXT INDEX name_index ON category(name);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');