select * from book;
select * from author;
select * from author_book;

select
	a.first_name as author_first_name,
    a.last_name as author_last_name,
    a.email_address as author_email_address,
    a.date_of_birth as author_date_of_birth,
    b.name as book_name,
    b.description as book_description,
    b.isbn as book_isbn,
    b.price as book_price,
    c.name as book_category_name
from author_book ab
join author a on ab.author_id = a.id
join book b on ab.book_id = b.id
join category c on b.category_id = c.id 
	where c.name in('Fantasy', 'Epic fantasy') 
		order by book_price;
