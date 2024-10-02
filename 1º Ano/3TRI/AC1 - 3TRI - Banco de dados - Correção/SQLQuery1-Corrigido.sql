/* Questão 1 */
SELECT * FROM Produtos
WHERE preco > 100 
and estoque > 10 
and id_categoria = 2;

/* Questão 2 */
SELECT * FROM Pedidos
WHERE data_pedido BETWEEN '2023-01-01' AND '2023-12-31' 
and total > 200 
and status = 'Enviado'

/* Questão 3 */
SELECT * FROM Produtos
WHERE preco BETWEEN 50 and 150 
and estoque BETWEEN 5 and 20

/* Questão 4 */
SELECT * FROM Produtos
WHERE estoque > 30 
and preco < 80 
and nome_produto LIKE 'c%'

/* Questão 5 */
SELECT COUNT(total) FROM Pedidos
WHERE data_pedido BETWEEN '2023-01-01' AND '2023-12-31'

/* Questão 6 */
SELECT COUNT(DISTINCT metodo_pagamento) FROM Pagamentos
WHERE YEAR(data_pagamento) = 2023

/* Questão 7 */
SELECT COUNT(metodo_pagamento), metodo_pagamento AS total, metodo_pagamento
FROM Pagamentos
WHERE YEAR(data_pagamento) = 2023
GROUP BY metodo_pagamento

/* Questão 8 */
SELECT * FROM Produtos
ORDER BY preco DESC

/* Questão 9 */
SELECT * FROM Clientes
ORDER BY nome ASC

/* Questão 10 */
SELECT * FROM Pedidos
WHERE id_cliente like '7%'
ORDER BY data_pedido ASC