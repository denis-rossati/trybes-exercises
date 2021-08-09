(SELECT actor.first_name, actor.last_name FROM sakila.actor)
UNION ALL
(SELECT customer.first_name, customer.last_name FROM sakila.customer)
ORDER BY first_name ASC
LIMIT 15 OFFSET 45;