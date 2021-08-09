SELECT staff.first_name, staff.last_name, address.address
FROM sakila.staff staff
INNER JOIN sakila.address address
ON address.address_id = staff.address_id;
