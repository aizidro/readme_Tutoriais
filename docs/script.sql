DROP DATABASE IF EXISTS vendas;
CREATE DATABASE vendas;
USE vendas;

CREATE TABLE vendedores(
id INT NOT NULL PRIMARY KEY  AUTO_INCREMENT,
nome VARCHAR(35) NOT NULL,
matricula VARCHAR(30) NOT NULL
);

CREATE TABLE produtos (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_cel VARCHAR(35) NOT NULL,
    valor DECIMAL(7,2)  NOT NULL
);

CREATE TABLE vendas (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    data DATETIME NOT NULL,
    quantidade INT NOT NULL,
    produtoId INT NOT NULL,
    vendedorId INT NOT NULL,
    FOREIGN KEY (produtoId) REFERENCES produtos(id),
    FOREIGN KEY (vendedorId) REFERENCES vendedores(id)
);


INSERT INTO vendedores VALUES
(default, "Stefany Antonella", "14644"),
(default, "Stella Viana", "01516"),
(default, "Tomás Isaac", "50913");

INSERT INTO produtos VALUES
(default, "Samsung Galaxy M53", 2211.11),
(default, "Motorola Moto G42", 1499.00),
(default, "Rainha das Chamas",36.90),
(default, "Cronias Saxonicas - O cavaleiro da morte",57.90),
(default, "o milagre da manhã",56.59),
(default, "Lavadoura de Roupas Brastemp BWK12AB",2119.00),
(default, "Fogao Atlas 4 Bocas",899.00);


INSERT INTO vendas VALUES
(default, "2023-04-18T09:08:39",2,1,3),
(default, "2023-04-18T09:08:39",1,2,3),
(default, "2023-04-18T09:08:39",3,1,2),
(default, "2023-04-18T09:08:39",1,3,2),
(default, "2023-04-18T09:08:39",2,2,1),
(default, "2023-04-18T09:08:39",1,3,1);

CREATE VIEW proventos AS
SELECT vendedores.nome AS nome_vendedor, vendedores.matricula, 
       SUM(produtos.valor * vendas.quantidade) AS total_vendido, 
       SUM(produtos.valor * vendas.quantidade * 0.05) AS valor_comissao
FROM vendas 
JOIN vendedores ON vendas.vendedorId = vendedores.id 
JOIN produtos ON vendas.produtoId = produtos.id 
GROUP BY vendas.vendedorId;

CREATE VIEW vendas_especificada AS
SELECT vendas.data, produtos.nome_cel AS nome_produto, vendedores.nome AS nome_vendedor
FROM vendas 
JOIN vendedores ON vendas.vendedorId = vendedores.id 
JOIN produtos ON vendas.produtoId = produtos.id;

CREATE VIEW total_vendas AS
SELECT SUM(quantidade * valor) AS total_vendas
FROM vendas
JOIN produtos ON vendas.produtoId = produtos.id;