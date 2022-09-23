DROP TABLE IF EXISTS headcoaches, players;

CREATE TABLE headcoaches (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE players (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),,
  last_name VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
  REFERENCES customers (id)
    ON DELETE CASCADE
);

INSERT INTO headcoaches
	(first_name, last_name, email)

  VALUES 
  ("James","Butt", "test@test.com"),
  ("Josephine","Darakjy", "test@test.com"),
  ("Art","Venere", "test@test.com");

INSERT INTO players
	(first_name, last_name)
VALUES 
  ("Frank","Frankerson"),
  ("Mickey","Mantle"),
  ("Ken","Griffey");