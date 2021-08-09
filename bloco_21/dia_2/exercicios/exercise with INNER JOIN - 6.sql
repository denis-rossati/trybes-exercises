SELECT staff.first_name, staff.last_name, AVG(amount)
FROM sakila.payment AS payment
INNER JOIN sakila.staff staff
ON staff.staff_id = payment.staff_id
WHERE YEAR(payment.payment_date) = "2006"
GROUP BY payment.staff_id;