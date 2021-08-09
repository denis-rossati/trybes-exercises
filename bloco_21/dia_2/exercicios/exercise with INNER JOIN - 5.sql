SELECT customer.first_name, COUNT(address.address) AS `quantidade de endereço`
FROM sakila.customer customer
INNER JOIN sakila.address AS address ON address.address_id = customer.address_id
WHERE customer.active = 1
GROUP BY customer.first_name
ORDER BY first_name DESC;