(SELECT actor.first_name, actor.last_name FROM sakila.actor
ORDER BY actor_id DESC
LIMIT 5)
UNION
(SELECT staff.first_name, staff.last_name FROM sakila.staff
LIMIT 1)
UNION
(SELECT customer.first_name, customer.last_name FROM sakila.customer
LIMIT 5 OFFSET 15)
ORDER BY first_name ASC;