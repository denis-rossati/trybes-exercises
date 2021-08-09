USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER insert_in_log_operacoes_after_delete
BEFORE DELETE ON betrybe_automoveis.carros
FOR EACH ROW
BEGIN
	INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
	VALUES ("EXCLUSAO", NOW());
END $$;

DELIMITER ;