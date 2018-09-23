CREATE TABLE usuario (
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	sobrenome VARCHAR(50) NOT NULL,
	password VARCHAR(150) NOT NULL,
	username VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	enabled BOOLEAN
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE permissao (
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE usuario_permissao (
	id_usuario BIGINT(20) NOT NULL,
	id_permissao BIGINT(20) NOT NULL,
	PRIMARY KEY (id_usuario, id_permissao),
	FOREIGN KEY (id_usuario) REFERENCES usuario(id),
	FOREIGN KEY (id_permissao) REFERENCES permissao(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO usuario (nome, sobrenome, password, username, email, enabled) values ('administrador', 'administrador', '$2a$10$C4B0em1oYoQYqlWqIgjvRe7wDeaQFYQp91Sngm3rqRWKMk9EfJSt6', 'admin', 'jaironsousa@gmail.com', TRUE);
INSERT INTO usuario (nome, sobrenome, password, username, email, enabled) values ('user', 'user', '$2a$10$dpeJjt3P3u799WJS/D10qe6st0y.WjOq2fq.1HtEBO8Z7.GzNduIK', 'user', 'user@email.com', TRUE);

INSERT INTO permissao (id, descricao) values (1, 'ROLE_ADMIN');
INSERT INTO permissao (id, descricao) values (2, 'ROLE_USER');
INSERT INTO permissao (id, descricao) values (3, 'ROLE_CADASTRAR_USUARIO');
INSERT INTO permissao (id, descricao) values (4, 'ROLE_VISUALIZAR_USUARIO');
INSERT INTO permissao (id, descricao) values (5, 'ROLE_REMOVER_USUARIO');
INSERT INTO permissao (id, descricao) values (6, 'ROLE_CADASTRAR_DESTINATARIO');
INSERT INTO permissao (id, descricao) values (7, 'ROLE_VISUALIZAR_DESTINATARIO');
INSERT INTO permissao (id, descricao) values (8, 'ROLE_REMOVER_DESTINATARIO');
INSERT INTO permissao (id, descricao) values (9, 'ROLE_CADASTRAR_RESUMO');
INSERT INTO permissao (id, descricao) values (10, 'ROLE_VISUALIZAR_RESUMO');
INSERT INTO permissao (id, descricao) values (11, 'ROLE_VISUALIZAR_DASHBOARD');

-- admin
INSERT INTO usuario_permissao (id_usuario, id_permissao) values (1, 1);
INSERT INTO usuario_permissao (id_usuario, id_permissao) values (1, 2);
INSERT INTO usuario_permissao (id_usuario, id_permissao) values (1, 3);
INSERT INTO usuario_permissao (id_usuario, id_permissao) values (1, 4);
INSERT INTO usuario_permissao (id_usuario, id_permissao) values (1, 5);
INSERT INTO usuario_permissao (id_usuario, id_permissao) values (1, 6);
INSERT INTO usuario_permissao (id_usuario, id_permissao) values (1, 7);
INSERT INTO usuario_permissao (id_usuario, id_permissao) values (1, 8);
INSERT INTO usuario_permissao (id_usuario, id_permissao) values (1, 9);
INSERT INTO usuario_permissao (id_usuario, id_permissao) values (1, 10);

INSERT INTO usuario_permissao (id_usuario, id_permissao) values (2, 8);
INSERT INTO usuario_permissao (id_usuario, id_permissao) values (2, 9);
INSERT INTO usuario_permissao (id_usuario, id_permissao) values (2, 10);
