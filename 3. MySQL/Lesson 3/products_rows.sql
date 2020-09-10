DROP DATABASE IF EXISTS mini_models_shop;
CREATE DATABASE mini_models_shop CHAR SET utf8;
USE mini_models_shop;
SELECT database();

DROP TABLE IF EXISTS products;
CREATE TABLE products(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(70) NOT NULL,
    description TEXT,
    category VARCHAR(50) NOT NULL,
    code VARCHAR(15) NOT NULL UNIQUE,
    scale VARCHAR(6) NOT NULL DEFAULT '1:10',
    qty_in_stock SMALLINT NOT NULL,
    price DECIMAL(6, 2) NOT NULL, # 9999,99
    created_at DATE NOT NULL # 2018-08-07
);

INSERT INTO products(name, description, category, code, qty_in_stock, price, scale, created_at)
VALUES
('1968 Ford Mustang', NULL, 'Classic Cars', 'P01_0023', 68, 95.99, '1:12', '2012-12-28'),
('2001 Ferrari Enzo', 'Motor City Art Classics', 'Classic Cars', 'P11_0234', 0, 125.49, DEFAULT, '2018-12-20'),
('1968 Dodge Charger', 'Gearbox Collectibles', 'Classic Cars', 'P91_0023', 78, 78.39, '1:18', '2012-12-28'),
('1993 Mazda RX-7', NULL, 'Classic Cars', 'P01_0078', 899, 19.99, DEFAULT, '2018-05-07'),
('1965 Aston Martin DB5', 'Studio M Art Models', 'Classic Cars', 'P31_0023', 68, 63.99, '1:12', '2012-12-28'),
('1995 Honda Civic', NULL, 'Classic Cars', 'P01_0453', 566, 95.99, '1:18', '2018-06-02'),
('1936 Harley Davidson El Knucklehead', NULL, 'Motorcycles', 'P71_0023', 68, 799.99, '1:18', '2018-01-01'),
('1985 Toyota Supra', NULL, 'Classic Cars', 'P01_0789', 97, 56.78, DEFAULT, '2012-12-28'),
('Collectable Wooden Train', NULL, 'Trains', 'P23_9923', 68, 36.25, DEFAULT, '2012-12-28'),
('1917 Maxwell Touring Car', 'Highway 66 Mini Classics', 'Vintage Cars', 'P61_0343', 68, 95.99,'1:12', '2018-06-03'),
('1957 Vespa GS150', 'Exoto Designs', 'Motorcycles', 'P01_7023', 96, 95.99, '1:12', '2017-12-12'),
('1904 Buick Runabout', 'Studio M Art Models', 'Vintage Cars', 'P31_7893', 566, 69.36, '1:12', '2014-11-23'),
('1940s Ford truck', NULL, 'Trucks and Buses', 'P21_0893', 988, 1195.99, '1:12', '2009-06-20'),
('1928 British Royal Navy Airplane', NULL, 'Planes', 'P99_5223', 733, 215.29, DEFAULT, '2015-05-15'),
('18th Century Schooner', 'Carousel DieCast Legends', 'Classic Cars', 'P61_7233', 10, 95.99, '1:12', '2018-10-25'),
('1962 Volkswagen Microbus', 'Welly Diecast Productions', 'Trucks and Buses', 'P91_9512', 0, 2095.99, DEFAULT, '2003-05-12'),
('1982 Lamborghini Diablo', NULL, 'Classic Cars', 'P01_4563', 23, 56.87, '1:12', '2016-09-05');

SELECT database();

SELECT * FROM products;
SELECT name, category, scale, price, qty_in_stock, created_at FROM products;

SELECT * FROM products WHERE id = 10; 
SELECT * FROM products WHERE scale = '1:10';
SELECT * FROM products WHERE code = 'P99_5223';
SELECT * FROM products WHERE created_at = '2012-12-28';

SELECT * FROM products WHERE price > 500;
SELECT * FROM products WHERE price < 200;
SELECT * FROM products WHERE qty_in_stock >= 68;
SELECT * FROM products WHERE qty_in_stock <= 68;

SELECT * FROM products WHERE qty_in_stock > 0;

# AND(І), OR(АБО), NOT
SELECT * FROM products WHERE price > 500 AND qty_in_stock > 0;
SELECT * FROM products WHERE qty_in_stock > 0 AND scale = '1:10';

SELECT * FROM products WHERE scale = '1:12' OR scale = '1:20';

SELECT * FROM products WHERE NOT category = 'Classic Cars';

SELECT * FROM products ORDER BY category ASC;
SELECT * FROM products ORDER BY category DESC;

SELECT * FROM products ORDER BY price ASC; #DESC
SELECT * FROM products WHERE qty_in_stock > 0 ORDER BY name ASC;

SELECT * FROM products WHERE NOT category = 'Classic Cars' ORDER BY category ASC;
SELECT * FROM products WHERE NOT category = 'Classic Cars' AND NOT scale = '1:12';

SELECT * FROM products WHERE description IS NULL;
SELECT * FROM products WHERE description IS NOT NULL;

SELECT DISTINCT category FROM products;
SELECT DISTINCT scale FROM products;


SELECT p.name, p.category, p.price FROM products p;
SELECT p.* FROM products p;
SELECT p.* FROM products p WHERE p.scale = '1:12';
SELECT p.* FROM products p WHERE p.qty_in_stock > 0 AND p.scale = '1:10';