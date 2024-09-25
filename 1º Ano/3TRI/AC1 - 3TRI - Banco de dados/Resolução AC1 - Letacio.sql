SELECT * FROM Produtos


/* Questão 1 */
SELECT * FROM Produtos
WHERE preco > 100 and estoque > 10 and id_categoria = 2;

/* Questão 2 */
SELECT * FROM Pedidos

SELECT * FROM Pedidos
WHERE data_pedido BETWEEN '2023-01-01' AND '2023-12-31' and total > 200 and status = 'Enviado'

/* Questão 3 */
SELECT * FROM Produtos

SELECT * FROM Produtos
WHERE preco BETWEEN 50 and 150 and estoque BETWEEN 5 and 20

/* Questão 4 */
SELECT * FROM Produtos

SELECT * FROM Produtos
WHERE estoque > 30 and preco < 80 and nome_produto LIKE 'c%'

/* Questão 5 */
SELECT COUNT(*) FROM Pedidos
WHERE data_pedido BETWEEN '2023-01-01' AND '2023-12-31'

/* Questão 6 */
SELECT * FROM Pagamentos

SELECT COUNT(DISTINCT metodo_pagamento) FROM Pagamentos

/* Questão 7 */
SELECT COUNT(*) AS total, metodo_pagamento
FROM Pagamentos 
GROUP BY metodo_pagamento

/* Questão 8 */
SELECT * FROM Produtos

SELECT * FROM Produtos
ORDER BY preco DESC

/* Questão 9 */
SELECT * FROM Clientes
ORDER BY nome ASC

/* Questão 10 */
SELECT * FROM Pedidos
WHERE id_cliente = 7
ORDER BY data_pedido DESC