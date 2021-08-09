SELECT f.title, f.rental_duration, s.title, s.rental_duration
FROM sakila.film AS f, sakila.film AS s
WHERE f.length = s.length
AND f.rental_duration BETWEEN 2 AND 4
AND s.rental_duration BETWEEN 2 AND 4;