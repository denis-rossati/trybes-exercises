USE betrybe_automoveis;
DELIMITER $$;

CREATE TRIGGER insert_in_automoveis_after_update
BEFORE INSERT ON betrybe_automoveis.carros
FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
    NEW.acao = "INSERÇÃO",
    NEW.disponivel_em_estoque = 1;
END $$;

DELIMITER ;
