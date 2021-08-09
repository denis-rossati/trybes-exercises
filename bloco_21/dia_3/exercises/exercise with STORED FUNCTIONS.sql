USE sakila;
DELIMITER $$

CREATE FUNCTION returnTotalPayment(id NUMERIC)
RETURNS DOUBLE READS SQL DATA
BEGIN
	DECLARE total DOUBLE;
    SELECT SUM(payment.amount)
    FROM sakila.payment AS payment
    WHERE id = payment.customer_id
    INTO total;
    RETURN total;
END $$

DELIMITER ;