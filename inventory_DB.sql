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