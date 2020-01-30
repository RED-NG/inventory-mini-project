DROP DATABASE IF EXISTS inventory_DB ;
CREATE DATABASE inventory_DB;
USE inventory_DB;
 
 CREATE TABLE products(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(50) NOT NULL,
     quantity  DOUBLE NOT NULL,
     price DOUBLE NOT NULL,
     supplier  VARCHAR(50) NOT NULL,
     PRIMARY KEY(id)
 )

 INSERT INTO products (name, quantity, price, supplier)
VALUES ("Celery", 100, 3.00, "Mister Produce");

 INSERT INTO products (name, quantity, price, supplier)
VALUES ("Broccoli", 50, 5.00, "Mister Produce");

 INSERT INTO products (name, quantity, price, supplier)
VALUES ("Carrot", 71, 1.48, "Mister Produce");