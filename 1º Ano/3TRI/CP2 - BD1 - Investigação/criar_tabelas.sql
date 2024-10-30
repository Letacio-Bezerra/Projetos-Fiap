CREATE DATABASE Misterio
GO

USE Misterio
GO

-- Criação da tabela cidadãos
CREATE TABLE cidadãos (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    idade INT,
    profissão VARCHAR(100),
	hobby VARCHAR(50),
    status_criminal BIT --valor booleano onde 0 = Falso e 1 = Verdadeiro
);

-- Criação da tabela eventos
CREATE TABLE eventos (
    evento_id INT PRIMARY KEY,
    nome_evento VARCHAR(255),
    data_evento DATE,
    local_evento VARCHAR(100),
	descrição TEXT
);

-- Criação da tabela aparições_locais
CREATE TABLE aparições_locais (
    id INT PRIMARY KEY,
    cidadão_id INT,
    local VARCHAR(100),
    data_visita DATE,
    horário_visita TIME,
    evento_id INT,
    FOREIGN KEY (cidadão_id) REFERENCES cidadãos(id),
    FOREIGN KEY (evento_id) REFERENCES eventos(evento_id)
);

-- Criação da tabela relatórios_testemunhas
CREATE TABLE relatórios_testemunhas (
    id INT PRIMARY KEY,
    cidadão_suspeito VARCHAR(100),
    descrição TEXT
);
