CREATE TABLE usuario (
	id BIGINT(20) PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	sobrenome VARCHAR(50) NOT NULL,
	password VARCHAR(150) NOT NULL,
	username VARCHAR(50) NOT NULL,
	enabled BOOLEAN
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE permissao (
	id BIGINT(20) PRIMARY KEY,
	descricao VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE usuario_permissao (
	id_usuario BIGINT(20) NOT NULL,
	id_permissao BIGINT(20) NOT NULL,
	PRIMARY KEY (id_usuario, id_permissao),
	FOREIGN KEY (id_usuario) REFERENCES usuario(id),
	FOREIGN KEY (id_permissao) REFERENCES permissao(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO usuario (id, nome, sobrenome, password, username, enabled) values (1, 'administrador', 'administrador', '$2a$10$X607ZPhQ4EgGNaYKt3n4SONjIv9zc.VMWdEuhCuba7oLAL5IvcL5.', 'admin', TRUE);
INSERT INTO usuario (id, nome, sobrenome, password, username, enabled) values (2, 'user', 'user', '$2a$10$PWEgXQFhHgsPhawnnQO5M.cuTRqSh3edO8yMiNEC2rzF9uiKGPkQW', 'user', TRUE);

INSERT INTO permissao (id, descricao) values (1, 'ROLE_CADASTRAR_USUARIO');
INSERT INTO permissao (id, descricao) values (2, 'ROLE_VISUALIZAR_USUARIO');
INSERT INTO permissao (id, descricao) values (3, 'ROLE_REMOVER_USUARIO');
INSERT INTO permissao (id, descricao) values (4, 'ROLE_CADASTRAR_DESTINATARIO');
INSERT INTO permissao (id, descricao) values (5, 'ROLE_VISUALIZAR_DESTINATARIO');
INSERT INTO permissao (id, descricao) values (6, 'ROLE_REMOVER_DESTINATARIO');
INSERT INTO permissao (id, descricao) values (7, 'ROLE_CADASTRAR_RESUMO');
INSERT INTO permissao (id, descricao) values (8, 'ROLE_VISUALIZAR_RESUMO');
INSERT INTO permissao (id, descricao) values (9, 'ROLE_VISUALIZAR_DASHBOARD');

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

INSERT INTO usuario_permissao (id_usuario, id_permissao) values (2, 7);
INSERT INTO usuario_permissao (id_usuario, id_permissao) values (2, 8);
INSERT INTO usuario_permissao (id_usuario, id_permissao) values (2, 9);