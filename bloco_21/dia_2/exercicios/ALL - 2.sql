(SELECT customer.first_name, customer.last_name
FROM sakila.customer
WHERE customer.first_name LIKE "%tracy%")
UNION
(SELECT actor.first_name, actor.last_name
FROM sakila.actor
WHERE actor.first_name LIKE "%je%");
