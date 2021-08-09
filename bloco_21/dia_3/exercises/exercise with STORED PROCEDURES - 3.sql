USE sakila;
DELIMITER $$;

CREATE PROCEDURE showIfClientIsActive(
	IN email_input VARCHAR(50),
	OUT active_or_not TEXT
)
BEGIN
	SELECT IF(customer.active = 1, "ativo", "inativo")
	FROM sakila.customer AS customer
	WHERE @email_input = customer.email
    INTO active_or_not;

END $$;

DELIMITER ;
