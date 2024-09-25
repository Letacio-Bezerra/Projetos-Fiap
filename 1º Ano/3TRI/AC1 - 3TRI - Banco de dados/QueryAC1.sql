-- Criar o banco de dados
CREATE DATABASE EcommerceRoupas
GO

-- Selecionar o banco de dados
USE EcommerceRoupas;
GO

-- Tabela de Clientes
CREATE TABLE Clientes (
    id_cliente INT PRIMARY KEY,
    nome NVARCHAR(100) NOT NULL,
    email NVARCHAR(100) NOT NULL,
    endereco NVARCHAR(255) NULL,
    telefone NVARCHAR(15) NULL,
    data_registro DATE NOT NULL
);
GO

-- Tabela de Categorias de Produtos
CREATE TABLE Categorias (
    id_categoria INT PRIMARY KEY,
    nome_categoria NVARCHAR(50) NOT NULL
);
GO

-- Tabela de Produtos
CREATE TABLE Produtos (
    id_produto INT PRIMARY KEY,
    nome_produto NVARCHAR(255) NOT NULL,
    id_categoria INT NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    estoque INT NOT NULL,
    descricao NVARCHAR(MAX) NULL
);
GO

-- Tabela de Pedidos
CREATE TABLE Pedidos (
    id_pedido INT PRIMARY KEY,
    id_cliente INT NOT NULL,
    data_pedido DATE NOT NULL,
    status NVARCHAR(50) NOT NULL,  -- Status do pedido (Ex: Pendente, Enviado, Cancelado)
    total DECIMAL(10, 2) NOT NULL
);
GO

-- Tabela de Pagamentos
CREATE TABLE Pagamentos (
    id_pagamento INT PRIMARY KEY,
    id_pedido INT NOT NULL,
    metodo_pagamento NVARCHAR(50) NOT NULL,  -- Ex: Cartão de Crédito, Boleto, Pix
    data_pagamento DATE NOT NULL,
    valor_pago DECIMAL(10, 2) NOT NULL
);
GO

-- Tabela de Itens do Pedido (relacionando Produtos com Pedidos)
CREATE TABLE Itens_Pedido (
    id_item INT PRIMARY KEY,
    id_pedido INT NOT NULL,
    id_produto INT NOT NULL,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10, 2) NOT NULL,
    subtotal AS (quantidade * preco_unitario)
);
GO

INSERT INTO Produtos (id_produto, nome_produto, id_categoria, preco, estoque, descricao) VALUES
(1, 'Saia Clássica', 1, 142.64, 13, 'Produto de alta qualidade'),
(2, 'Vestido Elegante', 5, 194.58, 54, 'Produto de alta qualidade'),
(3, 'Casaco Verão', 2, 239.02, 53, NULL),
(4, 'Saia Estampada', 5, 244.14, 66, 'Produto de alta qualidade'),
(5, 'Bermuda Elegante', 2, 278.41, 121, 'Produto de alta qualidade'),
(6, 'Calça Inverno', 5, 30.75, 92, 'Produto de alta qualidade'),
(7, 'Camisa Social', 1, 237.71, 59, 'Produto de alta qualidade'),
(8, 'Camisa Esportiva', 2, 146.22, 124, 'Produto de alta qualidade'),
(9, 'Camiseta Inverno', 3, 189.38, 165, 'Produto de alta qualidade'),
(10, 'Bermuda Esportiva', 1, 202.39, 64, 'Produto de alta qualidade'),
(11, 'Bermuda Social', 4, 246.66, 37, NULL),
(12, 'Jaqueta Casual', 1, 61.59, 16, 'Produto de alta qualidade'),
(13, 'Bermuda Listrada', 1, 199.66, 14, 'Produto de alta qualidade'),
(14, 'Blusa Listrada', 4, 278.41, 181, 'Produto de alta qualidade'),
(15, 'Blusa Elegante', 3, 55.66, 26, NULL),
(16, 'Shorts Clássica', 2, 114.95, 6, 'Produto de alta qualidade'),
(17, 'Vestido Listrada', 1, 86.03, 11, 'Produto de alta qualidade'),
(18, 'Shorts Estampada', 4, 31.98, 44, 'Produto de alta qualidade'),
(19, 'Camiseta Verão', 1, 186.65, 106, NULL),
(20, 'Bermuda Verão', 4, 74.51, 41, 'Produto de alta qualidade'),
(21, 'Camisa Casual', 4, 151.3, 196, NULL),
(22, 'Jaqueta Verão', 1, 178.02, 34, NULL),
(23, 'Shorts Verão', 4, 75.2, 29, NULL),
(24, 'Camisa Confortável', 5, 62.08, 57, 'Produto de alta qualidade'),
(25, 'Blusa Social', 1, 231.41, 5, 'Produto de alta qualidade'),
(26, 'Camiseta Esportiva', 4, 118.5, 26, 'Produto de alta qualidade'),
(27, 'Blusa Casual', 1, 41.2, 54, 'Produto de alta qualidade'),
(28, 'Shorts Casual', 2, 79.03, 200, 'Produto de alta qualidade'),
(29, 'Blusa Estampada', 1, 160.59, 200, 'Produto de alta qualidade'),
(30, 'Vestido Esportiva', 3, 91.25, 5, 'Produto de alta qualidade');

INSERT INTO Clientes VALUES
(1, 'Pedro Martins', 'cliente1@exemplo.com', 'Rua Exemplo 1, Bairro 48', '(85) 99038-8960', '2023-02-08'),
(2, 'Ana Ferreira', 'cliente2@exemplo.com', 'Rua Exemplo 2, Bairro 37', '(76) 94681-8846', '2023-09-08'),
(3, 'João Costa', 'cliente3@exemplo.com', 'Rua Exemplo 3, Bairro 31', '(35) 92262-8239', '2022-03-19'),
(4, 'Ricardo Costa', 'cliente4@exemplo.com', 'Rua Exemplo 4, Bairro 32', '(53) 98693-4970', '2023-02-24'),
(5, 'Camila Lima', 'cliente5@exemplo.com', 'Rua Exemplo 5, Bairro 50', '(63) 91618-4507', '2021-11-06'),
(6, 'Ricardo Oliveira', 'cliente6@exemplo.com', 'Rua Exemplo 6, Bairro 10', '(60) 94119-1258', '2023-06-13'),
(7, 'Lucas Santos', 'cliente7@exemplo.com', 'Rua Exemplo 7, Bairro 12', '(82) 94205-2830', '2020-11-23'),
(8, 'Camila Santos', 'cliente8@exemplo.com', 'Rua Exemplo 8, Bairro 43', '(34) 91010-1901', '2021-05-23'),
(9, 'Ricardo Santos', 'cliente9@exemplo.com', 'Rua Exemplo 9, Bairro 9', '(73) 93034-2095', '2023-10-28'),
(10, 'Maria Gomes', 'cliente10@exemplo.com', 'Rua Exemplo 10, Bairro 24', '(27) 96005-4710', '2021-07-09'),
(11, 'Paulo Lima', 'cliente11@exemplo.com', 'Rua Exemplo 11, Bairro 24', '(28) 98478-8701', '2020-12-22'),
(12, 'Ana Silva', 'cliente12@exemplo.com', 'Rua Exemplo 12, Bairro 24', '(43) 90043-4026', '2021-08-16'),
(13, 'Camila Ferreira', 'cliente13@exemplo.com', 'Rua Exemplo 13, Bairro 43', '(93) 96055-1976', '2021-06-10'),
(14, 'João Ferreira', 'cliente14@exemplo.com', NULL, '(65) 91360-3942', '2022-12-22'),
(15, 'Paulo Silva', 'cliente15@exemplo.com', 'Rua Exemplo 15, Bairro 23', '(98) 97022-4069', '2023-10-05'),
(16, 'João Ferreira', 'cliente16@exemplo.com', 'Rua Exemplo 16, Bairro 32', '(33) 98078-6933', '2023-08-22'),
(17, 'Maria Alves', 'cliente17@exemplo.com', 'Rua Exemplo 17, Bairro 9', '(82) 92074-9515', '2020-08-01'),
(18, 'Ricardo Lima', 'cliente18@exemplo.com', 'Rua Exemplo 18, Bairro 41', '(61) 90043-3540', '2020-09-08'),
(19, 'Lucas Costa', 'cliente19@exemplo.com', 'Rua Exemplo 19, Bairro 12', '(60) 95817-9773', '2022-11-09'),
(20, 'Pedro Lima', 'cliente20@exemplo.com', 'Rua Exemplo 20, Bairro 32', '(19) 95032-9336', '2020-01-21');

INSERT INTO Categorias VALUES
(1, 'Roupas Masculinas'),
(2, 'Roupas Femininas'),
(3, 'Acessórios'),
(4, 'Calçados'),
(5, 'Infantil');

INSERT INTO Pedidos VALUES
(1, 19, '2021-03-04', 'Enviado', 55.41),
(2, 17, '2020-02-23', 'Pendente', 351.95),
(3, 8, '2022-09-18', 'Enviado', 363.03),
(4, 15, '2023-11-01', 'Pendente', 367.02),
(5, 2, '2023-05-14', 'Pendente', 409.2),
(6, 7, '2021-06-05', 'Enviado', 170.68),
(7, 18, '2022-10-23', 'Enviado', 437.17),
(8, 17, '2023-08-19', 'Pendente', 158.35),
(9, 5, '2021-08-23', 'Cancelado', 142.71),
(10, 20, '2020-10-17', 'Cancelado', 349.95),
(11, 13, '2023-05-07', 'Enviado', 55.67),
(12, 7, '2020-04-04', 'Cancelado', 65.19),
(13, 13, '2022-06-27', 'Cancelado', 318.85),
(14, 14, '2021-07-01', 'Cancelado', 356.82),
(15, 16, '2023-11-24', 'Enviado', 407.96),
(16, 14, '2023-07-20', 'Cancelado', 163.95),
(17, 20, '2022-01-04', 'Cancelado', 323.29),
(18, 20, '2021-01-10', 'Pendente', 152.54),
(19, 20, '2020-04-13', 'Pendente', 388.1),
(20, 15, '2022-03-06', 'Pendente', 112.5),
(21, 7, '2022-06-26', 'Pendente', 499.14),
(22, 8, '2023-06-17', 'Enviado', 131.01),
(23, 2, '2020-07-05', 'Cancelado', 385.99),
(24, 16, '2023-03-09', 'Pendente', 193.38),
(25, 10, '2023-03-13', 'Cancelado', 434.6),
(26, 9, '2021-06-28', 'Cancelado', 67.47),
(27, 4, '2023-11-09', 'Enviado', 441.39),
(28, 7, '2020-12-26', 'Enviado', 250.76),
(29, 17, '2020-02-17', 'Pendente', 76.89),
(30, 4, '2021-09-21', 'Enviado', 102.52);

INSERT INTO Pagamentos VALUES
(1, 1, 'Cartão de Crédito', '2021-04-20', 222.63),
(2, 2, 'Boleto', '2023-01-19', 203.36),
(3, 3, 'Boleto', '2023-03-19', 236.34),
(4, 4, 'Pix', '2020-09-07', 381.77),
(5, 5, 'Pix', '2023-02-14', 376.64),
(6, 6, 'Cartão de Crédito', '2023-10-23', 74.72),
(7, 7, 'Boleto', '2023-06-25', 287.54),
(8, 8, 'Cartão de Crédito', '2022-07-14', 130.44),
(9, 9, 'Pix', '2020-08-24', 286.53),
(10, 10, 'Pix', '2020-06-01', 110.44),
(11, 11, 'Cartão de Crédito', '2020-02-27', 123.86),
(12, 12, 'Cartão de Crédito', '2021-03-16', 199.24),
(13, 13, 'Cartão de Crédito', '2022-02-28', 102.18),
(14, 14, 'Cartão de Crédito', '2021-02-03', 91.91),
(15, 15, 'Cartão de Crédito', '2022-09-15', 254.67),
(16, 16, 'Boleto', '2022-11-22', 332.26),
(17, 17, 'Boleto', '2020-01-22', 420.45),
(18, 18, 'Pix', '2021-01-19', 300.8),
(19, 19, 'Cartão de Crédito', '2021-07-13', 475.45),
(20, 20, 'Cartão de Crédito', '2023-11-13', 121.29),
(21, 21, 'Cartão de Crédito', '2022-10-24', 219.8),
(22, 22, 'Cartão de Crédito', '2023-02-14', 371.47),
(23, 23, 'Boleto', '2023-06-03', 219.64),
(24, 24, 'Boleto', '2023-12-24', 466.17),
(25, 25, 'Cartão de Crédito', '2020-11-19', 454.44),
(26, 26, 'Cartão de Crédito', '2022-04-25', 339.18),
(27, 27, 'Cartão de Crédito', '2023-10-18', 220.12),
(28, 28, 'Boleto', '2023-02-16', 358.05),
(29, 29, 'Pix', '2022-08-02', 97.14),
(30, 30, 'Boleto', '2023-09-12', 79.32);

INSERT INTO Itens_Pedido VALUES
(1, 14, 10, 2, 248.17),
(2, 17, 24, 5, 188.29),
(3, 4, 29, 4, 194.71),
(4, 29, 11, 5, 212.98),
(5, 2, 26, 1, 37.9),
(6, 11, 23, 5, 223.08),
(7, 9, 19, 5, 238.9),
(8, 7, 10, 3, 204.01),
(9, 6, 26, 2, 235.05),
(10, 8, 29, 5, 242.26),
(11, 19, 10, 4, 67.5),
(12, 21, 25, 3, 230.47),
(13, 1, 6, 2, 227.01),
(14, 30, 10, 5, 234.32),
(15, 5, 25, 2, 54.8),
(16, 9, 2, 1, 184.81),
(17, 14, 9, 4, 58.59),
(18, 16, 9, 3, 228.62),
(19, 27, 23, 5, 253.37),
(20, 30, 25, 4, 282.65),
(21, 28, 11, 2, 103.68),
(22, 18, 13, 5, 72.75),
(23, 6, 13, 3, 86.72),
(24, 23, 8, 4, 127.37),
(25, 15, 3, 1, 119.03),
(26, 21, 20, 3, 165.96),
(27, 9, 27, 4, 193.35),
(28, 3, 16, 1, 180.56),
(29, 27, 24, 5, 90.33),
(30, 28, 10, 1, 209.04),
(31, 25, 22, 5, 119.47),
(32, 15, 13, 3, 164.31),
(33, 4, 15, 1, 176.93),
(34, 5, 14, 3, 172.84),
(35, 19, 22, 2, 294.41),
(36, 24, 25, 5, 134.7),
(37, 14, 3, 4, 138.24),
(38, 11, 8, 2, 45.85),
(39, 29, 14, 5, 49.48),
(40, 25, 3, 2, 255.41),
(41, 5, 25, 3, 195.02),
(42, 16, 25, 2, 182.41),
(43, 3, 12, 2, 194.21),
(44, 16, 23, 2, 254.89),
(45, 19, 10, 2, 109.68),
(46, 10, 2, 3, 246.03),
(47, 12, 22, 1, 277.71),
(48, 3, 11, 3, 71.44),
(49, 15, 1, 2, 75.91),
(50, 15, 3, 2, 210.37);