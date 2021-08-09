SELECT customer.first_name, customer.email, customer.address_id, address.address, address.district
FROM sakila.customer customer
INNER JOIN sakila.address address
ON customer.address_id = address.address_id
WHERE district = "California"
AND first_name LIKE "%rene%";
