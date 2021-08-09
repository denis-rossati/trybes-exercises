USE BeeMovies;
DELIMITER $$

CREATE TRIGGER sign_up_movie
BEFORE INSERT ON BeeMovies.movies
FOR EACH ROW
BEGIN
    INSERT INTO movies_logs (movie_id, log_date, executed_action)
    VALUES (NEW.movie_id, NOW(), "INSERT");
	SET NEW.release_year = YEAR(NOW());
END $$;

DELIMITER ;