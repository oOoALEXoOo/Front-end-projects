drop database if exists users;
create database users char set utf8;
use users;

create table user(
	first_name varchar(30) not null,
    last_name varchar(45) not null,
    age int
);

insert into user(first_name, last_name, age) 
	values 
		('Василь', 'Петренко', 35),
        ('Павло', 'Павленко', 28),
        ('', '', 56);
        
#insert into user(first_name, age) values ('Олег', 23);
        
select * from user;

#select database();
#drop table user;

drop database if exists car_info;
create database car_info char set utf8;
use car_info;

create table car(
	id int not null primary key auto_increment,
	manufacturer varchar(60) not null,
    model varchar(45) not null,
    color varchar(15) not null default 'unknown',
    model_year int,
    price decimal(7,2) not null default 0.00, #99999,99
    description text 
);

insert into car(manufacturer, model, color, model_year)
	values
		('Ford', 'Mustang', 'Gold', 2008),
        ('Volkswagen', 'Golf 6', 'Black', 2010),
        ('Ford', 'Mustang', 'Yellow', 2012),
        ('Nissan', 'GTR', 'Red', 2010);
        
insert into car(manufacturer, model, model_year)
	values
		('Mazda', 'CX-9', 2009);
        
select * from car;