SELECT customer.customer_id, CONCAT(customer.first_name, customer.last_name), customer.email, address.address_id, address.address
FROM sakila.customer customer
INNER JOIN sakila.address address
ON customer.address_id = address.address_id;
