CREATE TABLE destinatario (
  id BIGINT(20) NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO destinatario (id, nome, email) values (1, 'Jairo', 'jaironsousa@gmail.com');
INSERT INTO destinatario (id, nome, email) values (2, 'Rayan', 'rayanteixeira91@gmail.com ');