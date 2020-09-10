select database();
use mini_models_shop;

select * from products where description is not null order by description;

select count(*) from products;
select count(*) from products where scale = '1:10';
select count(*) from products where category = 'Classic Cars';
select count(*) from products where price < 500;
select count(description) from products;

select avg(qty_in_stock) from products;
select avg(price) from products;
select avg(price) from products where scale = '1:10';
select avg(qty_in_stock), count(*) from products
	where description = 'Studio M Art Models'; 

select min(qty_in_stock) from products;
select min(qty_in_stock) from products where qty_in_stock > 0;
select min(price) from products;
select min(created_at) from products;
select min(name) from products;

select name, category, price from products
	where price = (select min(price) from products);
    
select name, category, price from products
	where price = (select min(price) from products where category = 'Trains');
    
select max(price) from products;
select max(qty_in_stock) from products;
select max(qty_in_stock) from products where price < 500;
select max(created_at) from products;

select max(price), count(*) from products where category = 'Classic Cars';
select name, price, category, qty_in_stock from products 
	where price = (select max(price) from products where scale = '1:12');

select sum(qty_in_stock) from products;
select sum(qty_in_stock) from products where scale = '1:10';
select sum(price), count(*) from products 
	where scale = '1:12' and created_at > '2015-01-01';

select round(price, 4) from products;
select name, category, round(price, 4) as rounded_price from products order by price;
select count(*) as result from products;

# Ucase
select ucase(name) as model_name, category from products;
select ucase(name), ucase(category) from products order by category;
select ucase(name), scale from products where scale = '1:10';

#Lcase
select lcase(name) from products;
select lcase(category), lcase(description), ucase(name) from products
	where description is not null;

#Mid    
select mid(category, 3, 5) from products;
select mid(name, 1, 6) from products where scale = '1:18';

#Now
select now();
select lcase(name), ucase(category), round(price, 4), qty_in_stock, now() from products 
	where qty_in_stock > 0 order by qty_in_stock;

#Limit
select * from products limit 3;
select * from products order by category limit 5;
select * from products limit 0, 5;
select * from products limit 9, 5;
select * from products order by name limit 0, 5;

#Like
select * from products where code like '%23';
select * from products where code like '%00%';
select * from products where name like '%ford%';
select * from products where name like '1968%';
select * from products where code like 'P_1%';
select * from products where code like 'P_1_0023';
select * from products where code like 'P_1_00__';

#Between
select * from products where price between 50 and 200;
select * from products where created_at between '2000-01-01' and '2010-01-01';
select * from products where price not between 50 and 200 order by price;

#In
select * from products where id = 5 or id = 10 or id = 13;
select * from products where id in (5,10,13);
select * from products where category in ('Classic Cars', 'Trains');
select * from products where category not in ('Classic Cars', 'Trains');

select * from products;

#Update
update products set name = '1968 Ford Mustang GT' where id = 1;
update products set 
	name = '1993 Mazda RX-7 GT',
    description = 'Mazda description' where id = 4;
    
set SQL_SAFE_UPDATES = 0;
update products set qty_in_stock = 8888;
set SQL_SAFE_UPDATES = 1;
    
#delete
delete from products where id = 2;

set SQL_SAFE_UPDATES = 0;
delete from products;
set SQL_SAFE_UPDATES = 1;