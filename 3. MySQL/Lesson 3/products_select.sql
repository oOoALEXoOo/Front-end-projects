select database();
select * from products;
select name, category, scale, price, qty_in_stock, created_at from products;
select * from products where id = 10;
select * from products where scale = '1:10';
select * from products where code = 'P99_5223';
select * from products where created_at = '2012-12-28';
select * from products where price > 500;
select * from products where price < 200;
select * from products where qty_in_stock >= 68;
select * from products where qty_in_stock <= 68;
select * from products where qty_in_stock > 0;

select * from products where price > 500 and qty_in_stock > 0;
select * from products where qty_in_stock > 0 and scale = '1:10';

select * from products where scale = '1:12' or scale = '1:20';

select * from products where not category = 'Classic Cars';

select * from products order by category asc;
select * from products order by category desc;
select * from products order by price;

select * from products where qty_in_stock > 0 order by name asc;

select * from products where not category = 'Classic Cars' order by category asc;
select * from products where not category = 'Classic Cars' and not scale = '1:12';

select * from products where description is null;
select * from products where description is not null;

select distinct category from products;
select distinct scale from products;

select p.name, p.category, p.price from products p;
select p.* from products p;
select p.* from products p where p.scale = '1:12';
select p.* from products p where p.qty_in_stock > 0 and p.scale = '1:10';