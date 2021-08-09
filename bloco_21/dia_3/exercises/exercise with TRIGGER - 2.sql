USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER define_date_car_table
BEFORE UPDATE ON betrybe_automoveis.carros
FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
    NEW.acao = "ATUALIZACAO";
END $$;

DELIMITER ;