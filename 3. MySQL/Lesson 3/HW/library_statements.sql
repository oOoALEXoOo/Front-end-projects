select database();

select * from book;
select * from book where id = 5 or id = 10 or id = 13;
select * from book where pages > 150;
select * from book where author_age > 30;
select * from book where author_awards is null;
select * from book where author_email = 'mikhailbulgakov@gmail.com';
select * from book where isbn = '978-5-50012-665-1';
select * from book where category = 'Post-apocalyptic';
select * from book where pages > 200 and author_age > 25;
select * from book where category = 'Fantasy' or category = 'Political novel, epic fantasy';
select * from book order by book_name asc;
select * from book order by author_email asc;
select * from book order by pages desc;
select distinct category from book;
select distinct author_first_name, author_last_name from book;
select * from book where publication_date > '2000-01-01';
select * from book where publication_date < '2010-01-01';