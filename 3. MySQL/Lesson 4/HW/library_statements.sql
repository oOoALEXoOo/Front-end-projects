use library;
select database();

select * from book;

update book set 
	author_last_name = 'Williams' where id in (1,2);
select count(*) from book where author_awards is not null;
select * from book where pages = 
	(select min(pages) from book);
select max(pages) as pages_max from book;
select avg(price) from book;
select sum(price) from book where category = 'Post-apocalyptic';
select min(price) from book;
select book_name, description, category, price, author_first_name, author_last_name
	from book where price = 
	(select min(price) from book);
select book_name, description, category, round(price, 4), author_first_name, author_last_name
	from book order by book_name;
select * from book order by publication_date limit 5, 5;
select * from book order by publication_date limit 10, 6;
select * from book where isbn like '978%';
select * from book where isbn like '978_5%2';
select * from book where isbn like '%87704%';
select * from book where price between 50 and 120;
select * from book where price not between 200 and 600;

delete from book where id = 5;
set SQL_SAFE_UPDATES = 0;
delete from book where book_name = 'Winnie-the-Pooh';
delete from book where isbn = '978-5-87704-588-3';
select * from book where isbn = '978-5-87704-588-3';
set SQL_SAFE_UPDATES = 1;