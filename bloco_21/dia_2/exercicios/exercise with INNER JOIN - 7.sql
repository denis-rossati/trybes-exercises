SELECT actor.actor_id, actor.first_name, actor.last_name, film_actor.actor_id, film.title
FROM sakila.actor actor
INNER JOIN sakila.film_actor film_actor
ON film_actor.actor_id = actor.actor_id
INNER JOIN sakila.film film
ON film.film_id = film_actor.film_id;
