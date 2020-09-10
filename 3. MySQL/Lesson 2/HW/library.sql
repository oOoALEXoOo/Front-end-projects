drop database if exists users;
drop database if exists car_info;

drop database if exists library;
create database library char set utf8;
use library;

create table book(
	id int not null primary key auto_increment,
	book_name varchar(120) not null,
    description text,
    publication_date date not null default '2018-01-01',
    author varchar(60) not null,
    category varchar(30) not null
);

insert into book(book_name, description, publication_date, author, category)
	values
		('Winnie-the-Pooh', 'About adventures of Winnie the Pooh', '2015-05-01', 'Alan Alexander Milne', 'Adventures'),
        ('The Master and Margarita', 'The story concerns a visit by the devil to the officially atheistic Soviet Union', '1967-08-20', 'Mikhail Bulgakov', 'Fantasy'),
        ('Harry Potter and the Philosopher\'s Stone', 'About young wizard who discovers his magical heritage', '1998-09-01', 'J. K. Rowling', 'Fantasy'),
        ('Harry Potter and the Chamber of Secrets', 'About young wizard who discovers his magical heritage', '1999-06-01', 'J. K. Rowling', 'Fantasy'),
        ('Harry Potter and the Prisoner of Azkaban', 'About young wizard who discovers his magical heritage', '1999-07-01', 'J. K. Rowling', 'Fantasy'),
        ('Harry Potter and the Goblet of Fire', 'About young wizard who discovers his magical heritage', '2000-08-08', 'J. K. Rowling', 'Fantasy'),
        ('The Witcher The Last Wish', 'About titular "witcher", Geralt of Rivia', '2007-01-01', 'Andrzej Sapkowski', 'Fantasy'),
        ('Metro 2033', 'About Moscow Metro, where the last survivors hide after a global nuclear holocaust', '2010-03-18', 'Dmitry Glukhovsky', 'Post-apocalyptic'),
        ('Hamlet', 'Set in Denmark, the play depicts Prince Hamlet and his revenge against his uncle, Claudius, who has murdered Hamlet\'s father in order to seize his throne and marry Hamlet\'s mother', '1603-01-01', 'William Shakespeare', 'Shakespearean tragedy');

        
insert into book(book_name, publication_date, author, category)
	values
		('Fahrenheit 451', '1953-10-19', 'Ray Bradbury', 'Dystopian');

select * from book;