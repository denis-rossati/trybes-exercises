SELECT actor.first_name, actor.last_name FROM sakila.actor
UNION ALL
SELECT staff.first_name, staff.last_name FROM sakila.staff;
