drop database if exists countries;
create database countries char set utf8;
use countries;

create table country(
	id int not null primary key auto_increment,
    name varchar(50) not null
);

create table town(
	id int not null primary key auto_increment,
    name varchar(50) not null,
    country_id int not null
);

alter table town add foreign key (country_id) 
	references country(id);
    
insert into country(name) values
('Україна'),
('Польша'),
('Німеччина'),
('Італія');

insert into town(name, country_id) values
('Львів', 1),
('Тернопіль', 1),
('Берлін', 3),
('Рим', 4);