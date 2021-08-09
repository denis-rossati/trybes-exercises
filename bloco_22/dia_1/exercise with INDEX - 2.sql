USE sakila;
CREATE INDEX postal_code_index ON address(postal_code);
SELECT *
FROM sakila.address
WHERE postal_code = '36693';