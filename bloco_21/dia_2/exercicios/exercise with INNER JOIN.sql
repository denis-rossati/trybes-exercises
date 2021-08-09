SELECT F.film_id, F.replacement_cost, S.film_id, S.replacement_cost
FROM sakila.film AS F, sakila.film AS S
WHERE F.replacement_cost = S.replacement_cost;