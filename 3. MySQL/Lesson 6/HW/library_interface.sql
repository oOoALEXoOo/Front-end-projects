drop database if exists library;
create database library char set utf8;
use library;

create table category (
	id int not null primary key auto_increment,
	name varchar(30) not null unique
);

create table book (
	id int not null primary key auto_increment,
	name varchar(120) not null,
    description text,
    isbn varchar(20) not null unique,
    price decimal(5,2) not null default 0.00,
    category_id int not null
);

alter table book add foreign key (category_id)
	references category(id);
    
create table author (
	id int not null primary key auto_increment,
	first_name varchar(45) not null,
    last_name varchar(45) not null,
    email_address varchar(50) not null unique,
    date_of_birth date not null
);

create table author_book (
	author_id int not null,
    book_id int not null
);

alter table author_book add foreign key (author_id)
	references author(id);
    
alter table author_book add foreign key (book_id)
	references book(id);
    
insert into category(name) values
('Adventures'), #1
('Fantasy'), #2
('Post-apocalyptic'), #3
('Epic fantasy'); #4

insert into book(name, description, isbn, price, category_id) values
('Winnie-the-Pooh', 'About adventures of Winnie the Pooh', '978-1-54898-405-2', 59.99, 1),
('The Master and Margarita', 'The story concerns a visit by the devil to the officially atheistic Soviet Union', '978-5-45667-305-2', 119.99, 2),
('Harry Potter and the Philosopher\'s Stone', 'About young wizard who discovers his magical heritage. Part 1', '978-5-50012-705-5', 399.99, 2),
('Harry Potter and the Chamber of Secrets', 'About young wizard who discovers his magical heritage. Part 2', '978-5-50012-621-2', 259.99, 2),
('Harry Potter and the Prisoner of Azkaban', 'About young wizard who discovers his magical heritage. Part 3', '978-5-50012-489-2', 569.99, 2),
('Harry Potter and the Goblet of Fire', 'About young wizard who discovers his magical heritage. Part 4', '978-5-50012-655-5', 449.99, 2),
('Harry Potter and the Order of the Phoenix', 'About young wizard who discovers his magical heritage. Part 5', '978-5-50012-852-3', 599.99, 2),
('Harry Potter and the Half-Blood Prince', 'About young wizard who discovers his magical heritage. Part 6', '978-5-50012-665-1', 499.99, 2),
('Harry Potter and the Deathly Hallows', 'About young wizard who discovers his magical heritage. Part 7', '978-5-50012-805-4', 699.99, 2),
('Fantastic Beasts and Where to Find Them', 'About the magical creatures in the Harry Potter universe', '978-5-65228-408-5', 477.99, 2),
('The Witcher The Last Wish', 'About titular "witcher", Geralt of Rivia. Part 1', '978-5-87704-507-1', 489.99, 2),
('The Witcher Sword of Destiny', 'About titular "witcher", Geralt of Rivia. Part 2', '978-5-87704-625-3', 474.99, 2),
('The Witcher Blood of Elves', 'About titular "witcher", Geralt of Rivia. Part 3', '978-5-87704-782-2', 399.99, 2),
('The Witcher Time of Contempt', 'About titular "witcher", Geralt of Rivia. Part 4', '978-5-87704-266-3', 488.99, 2),
('The Witcher Baptism of Fire', 'About titular "witcher", Geralt of Rivia. Part 5', '978-5-87704-588-3', 449.99, 2),
('The Witcher The Tower of the Swallow', 'About titular "witcher", Geralt of Rivia. Part 6', '978-5-87704-381-1', 359.99, 2),
('The Witcher The Lady of the Lake', 'About titular "witcher", Geralt of Rivia. Part 7', '978-5-87704-751-1', 444.99, 2),
('The Witcher Season of Storms', 'About titular "witcher", Geralt of Rivia. Part 8', '978-5-87704-287-2', 355.99, 2),
('Metro 2033', 'About Moscow Metro, where the last survivors hide after a global nuclear holocaust', '978-3-755109-587-1', 258.99, 3),
('Metro 2034', 'About Moscow Metro, where the last survivors hide after a global nuclear holocaust', '978-3-755109-805-1', 299.99, 3),
('Metro 2035', 'About Moscow Metro, where the last survivors hide after a global nuclear holocaust', '978-3-755109-725-5', 199.99, 3),
('A Game of Thrones', 'The first novel in A Song of Ice and Fire', '0-553-10354-7', 859.99, 4),
('A Clash of Kings', 'The second novel in A Song of Ice and Fire', '0-553-10803-4', 899.99, 4),
('A Storm of Swords', 'The third novel in A Song of Ice and Fire', '0-00-224586-8', 999.99, 4),
('A Feast for Crows', 'The fourth novel in A Song of Ice and Fire', '0-553-80150-3', 859.99, 4);

insert into author(first_name, last_name, email_address, date_of_birth) values
('Alan Alexander', 'Milne', 'alanmilne@gmail.com', '1882-01-18'), #1
('Mikhail', 'Bulgakov', 'mikhailbulgakov@gmail.com', '1891-03-15'), #2
('J. K.', 'Rowling', 'rowling1@gmail.com', '1965-07-31'), #3
('Andrzej', 'Sapkowski', 'andrzejsapkowski1@gmail.com', '1948-06-21'), #4
('Dmitry', 'Glukhovsky', 'dmitryglukhovsky1@gmail.com', '1979-06-12'), #5
('George Raymond', 'Martin', 'georgemartin1@gmail.com', '1948-09-20'); #6

insert into author_book(author_id, book_id) values
(1, 1),
(2, 2),
(3, 3), (3, 4), (3, 5), (3, 6), (3, 7), (3, 8), (3, 9), (3, 10),
(4, 11), (4, 12), (4, 13), (4, 14), (4, 15), (4, 16), (4, 17), (4, 18),
(5, 19), (5, 20), (5, 21),
(6, 22), (6, 23), (6, 24), (6, 25);