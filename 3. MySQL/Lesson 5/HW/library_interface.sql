drop database if exists library;
create database library char set utf8;
use library;

create table category (
	id int not null primary key auto_increment,
	name varchar(30) not null unique
);

create table book (
	id int not null primary key auto_increment,
	book_name varchar(120) not null,
    description text,
    price decimal(5,2) not null default 0.00,
    isbn varchar(20) not null unique,
    category_id int not null
);

alter table book add foreign key (category_id)
	references category(id);
    
create table author (
	id int not null primary key auto_increment,
	first_name varchar(45) not null,
    last_name varchar(45) not null,
    email varchar(50) not null unique,
    address varchar(50) not null unique,
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