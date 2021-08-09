USE BeeMovies;
DELIMITER $$

CREATE TRIGGER show_if_is_increasing_or_decreasing
BEFORE UPDATE ON BeeMovies.movies
FOR EACH ROW
BEGIN  
	SET NEW.ticket_price_estimation = IF(
    NEW.ticket_price > OLD.ticket_price, "Increasing", "Decreasing"
    );
    INSERT INTO BeeMovies.movies_logs (movie_id, executed_action, log_date)
    VALUES (NEW.movie_id, "UPDATE", NOW());
END $$

DELIMITER ;