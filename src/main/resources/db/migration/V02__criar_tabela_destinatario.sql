CREATE TABLE IF NOT EXISTS `destinatario` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO destinatario (nome, email) values
("Jairo Nascimento", "jairo.sousa@yahoo.com"),
("Jairo Sousa", "jaironsousa@gmail.com"),
("Rayan Teixeira", "rayanteixeira91@gmail.com");