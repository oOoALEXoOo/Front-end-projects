drop database if exists pets_for_sale;
create database pets_for_sale char set utf8;
use pets_for_sale;

create table type (
	id int not null primary key auto_increment,
    name varchar(15) not null unique
);

create table cat_breed (
	id int not null primary key auto_increment,
    name varchar(40) not null unique
);

create table dog_breed (
	id int not null primary key auto_increment,
    name varchar(40) not null unique
);

create table breed (
	id int not null primary key auto_increment,
    type_id int not null,
    cat_breed_id int,
    dog_breed_id int
);

alter table breed add foreign key (type_id)
	references type(id);

alter table breed add foreign key (cat_breed_id)
	references cat_breed(id);
    
alter table breed add foreign key (dog_breed_id)
	references dog_breed(id);
    
alter table breed add check (
	cat_breed_id is not null and dog_breed_id is null
		or 
    cat_breed_id is null and dog_breed_id is not null
);

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

create table breeder (
	id int not null primary key auto_increment,
    first_name varchar(45) not null,
    last_name varchar(45) not null,
    reviews_rating decimal(2,1) not null default 0.0,
    email varchar(80) not null unique,
    date_of_birth date not null,
    phone_number varchar(20) not null unique,
    town_id int not null,
    gender_id int not null
);

alter table breeder add foreign key (town_id)
	references town(id);
alter table breeder add foreign key (gender_id)
	references gender(id);

create table pet (
	id int not null primary key auto_increment,
    name varchar(30) not null,
    date_of_birth date not null,
    price decimal(7,2) not null,
    breed_id int not null,
    color_id int not null,
    gender_id int not null, #male, female
    breeder_id int not null
);

alter table pet add foreign key (breed_id)
	references breed(id);
alter table pet add foreign key (color_id)
	references color(id);
alter table pet add foreign key (gender_id)
	references gender(id);
alter table pet add foreign key (breeder_id)
	references breeder(id);
    
insert into type(name) values
('Cat'), #1
('Dog'), #2
('Bird'), #3
('Fish'), #4
('Rabbit'); #5

insert into cat_breed(name) values
('British Shorthair'), #1
('British Longhair'), #2
('Maine Coon'), #3
('Persian'), #4
('Scottish Fold'), #5
('Sphynx'); #6

insert into dog_breed(name) values
('American Bulldog'), #1
('Australian Terrier'), #2
('Brittany Spaniel'), #3
('Labrador Retriever'), #4
('Boxer'), #5
('Greyhound'); #6

insert into breed(type_id, cat_breed_id, dog_breed_id) values
(1, 1, null), (1, 2, null), (1, 3, null), (1, 4, null), (1, 5, null), (1, 6, null),
(2, null, 1), (2, null, 2), (2, null, 3), (2, null, 4), (2, null, 5), (2, null, 6);

insert into color(name) values
('White'), #1
('Black'), #2
('Red'), #3
('Brown'), #4
('Cream'), #5
('Grey'), #6
('Blue'), #7
('Bicolor'), #8
('Tricolor'); #9

insert into gender(name) values
('Male'),
('Female');

insert into country(name) values 
('The USA'),
('The UK'),
('Australia'),
('Scotland');

insert into town(name, country_id) values
('New York', 1), #1
('Chicago', 1), #2
('London', 2), #3
('Manchester', 2), #4
('Sydney', 3), #5
('Melbourne', 3), #6
('Edinburgh', 4); #7

insert into breeder(first_name, last_name, reviews_rating,
email, date_of_birth, phone_number, town_id, gender_id) values
('Mike', 'Wilson', '9.3', 'mikewilson@gmail.com', '1979-07-21', '+324000568748', 5, 1),
('David', 'Miller', '9.7', 'davidmiller@gmail.com', '1981-01-07', '+229078561102', 1, 1),
('John', 'Smith', '9.5', 'johnsmith@gmail.com', '1985-09-14', '+109010598762', 2, 1),
('Alice', 'Ansley', '9.5', 'aliceansley@gmail.com', '1987-01-05', '+365404605107', 4, 2),
('Emily', 'Baines', '9.9', 'emilybaines@gmail.com', '1989-10-11', '+453017006608', 7, 2);

insert into pet(name, date_of_birth, price, breed_id, color_id, gender_id, breeder_id) values
('Charlie', '2019-01-15', 5699.00, 8, 8, 1, 1),
('Jack', '2019-05-20', 10599.00, 7, 5, 1, 2),
('Oscar', '2019-07-02', 9999.00, 11, 1, 1, 3),
('Ollie', '2019-01-17', 7999.00, 11, 6, 1, 3),
('Max', '2018-11-10', 12499.00, 12, 4, 1, 3),
('Tigger', '2019-11-25', 9699.00, 1, 7, 1, 5),
('Kitty', '2019-10-07', 8799.00, 1, 5, 2, 5),
('Molly', '2018-12-06', 15699.00, 2, 8, 2, 5),
('Lilly', '2019-05-11', 16899.00, 4, 1, 2, 4),
('Felix', '2019-04-20', 17599.00, 4, 1, 1, 4);