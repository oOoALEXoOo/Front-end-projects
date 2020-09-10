drop database if exists pets_for_sale;
create database pets_for_sale char set utf8;
use pets_for_sale;

create table type (
	id int not null primary key auto_increment,
    name varchar(15) not null unique
);

create table breed (
	id int not null primary key auto_increment
);

create table cat_breed (
	id int not null primary key auto_increment,
    name varchar(40) not null unique,
    breed_id int not null
);

create table dog_breed (
	id int not null primary key auto_increment,
    name varchar(40) not null unique,
    breed_id int not null
);

alter table cat_breed add foreign key (breed_id)
	references breed(id);
    
alter table dog_breed add foreign key (breed_id)
	references breed(id);

create table color (
	id int not null primary key auto_increment,
    name varchar(45) not null unique
);

create table gender (
	id int not null primary key auto_increment,
    name varchar(15) not null unique
);

create table country (
	id int not null primary key auto_increment,
    name varchar(45) not null unique
);

create table town (
	id int not null primary key auto_increment,
    name varchar(45) not null,
    country_id int not null
);

alter table town add foreign key (country_id)
	references country(id);

create table location (
	id int not null primary key auto_increment,
    town_id int not null
);

alter table location add foreign key (town_id)
	references town(id);

create table pet (
	id int not null primary key auto_increment,
    name varchar(30) not null,
    date_of_birth date not null,
    price decimal(7,2) not null,
    type_id int not null,
    breed_id int not null,
    color_id int not null,
    gender_id int not null, #male, female
    location_id int not null
);

alter table pet add foreign key (type_id)
	references type(id);
alter table pet add foreign key (breed_id)
	references breed(id);
alter table pet add foreign key (color_id)
	references color(id);
alter table pet add foreign key (gender_id)
	references gender(id);
alter table pet add foreign key (location_id)
	references location(id);

create table breeder (
	id int not null primary key auto_increment,
    first_name varchar(45) not null,
    last_name varchar(45) not null,
    reviews_rating decimal(2,1) not null default 0.0,
    reviews text,
    email varchar(80) not null unique,
    date_of_birth date not null,
    phone_number varchar(20) not null unique,
    town_id int not null,
    gender_id int not null #male, female
);

alter table breeder add foreign key (town_id)
	references town(id);
alter table breeder add foreign key (gender_id)
	references gender(id);