drop database if exists car_rent;
create database car_rent char set utf8;
use car_rent;

create table manufacturer (
	id int not null primary key auto_increment,
    name varchar(45) not null unique,
    details text
);

create table model (
	id int not null primary key auto_increment,
	name varchar(45) not null,
    year date not null default '2018-01-01',
    manufacturer_id int not null
);

alter table model add foreign key (manufacturer_id)
	references manufacturer(id);
    
create table color (
	id int not null primary key auto_increment,
    name varchar(30) not null unique
);

create table fuel_type (
	id int not null primary key auto_increment,
    name varchar(25) not null unique
);

create table vehicle_category (
	id int not null primary key auto_increment,
    name varchar(30) not null unique,
    description text
);

create table drive_type (
	id int not null primary key auto_increment,
    name varchar(15) not null unique,
    description text
);

create table transmission_type (
	id int not null primary key auto_increment,
    name varchar(20) not null unique
);

create table vehicle (
	id int not null primary key auto_increment,
    reg_number varchar(12) not null unique,
    current_km decimal(8,2) not null,
    engine_size decimal(2,1) not null,
    daily_hire_rate decimal(7,2) not null,
    model_id int not null,
    vehicle_category_id int not null,
    color_id int not null,
    fuel_type_id int not null,
    drive_type_id int not null,
    transmission_type_id int not null
);

alter table vehicle add foreign key (model_id)
	references model(id);

alter table vehicle add foreign key (vehicle_category_id)
	references vehicle_category(id);
    
alter table vehicle add foreign key (color_id)
	references color(id);
    
alter table vehicle add foreign key (fuel_type_id)
	references fuel_type(id);

alter table vehicle add foreign key (drive_type_id)
	references drive_type(id);
    
alter table vehicle add foreign key (transmission_type_id)
	references transmission_type(id);
    
    
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
    
create table gender (
	id int not null primary key auto_increment,
    name varchar(20) not null unique
);

create table customer (
	id int not null primary key auto_increment,
    first_name varchar(45) not null,
    last_name varchar(45) not null,
    details text,
    email varchar(80) not null unique,
    birthday date not null,
    phone_number varchar(20) not null unique,
    town_id int not null,
    gender_id int not null
);

alter table customer add foreign key (town_id)
	references town(id);
    
alter table customer add foreign key (gender_id)
	references gender(id);
    
alter table customer add check (birthday < (select current_date - interval 21 year));

create table booking_status (
	id int not null primary key auto_increment,
    name varchar(15) not null unique,
    description text
);

create table booking (
	id int not null primary key auto_increment,
    customer_id int not null,
    vehicle_id int not null,
    date_from date not null,
    date_to date not null,
    payment_received boolean default false,
    booking_status_id int not null
);

alter table booking add foreign key (customer_id)
	references customer(id);
    
alter table booking add foreign key (vehicle_id)
	references vehicle(id);
    
alter table booking add foreign key (booking_status_id)
	references booking_status(id);
    
alter table booking add check (
	date_from >= current_date
		and 
    date_to >= current_date
);


insert into manufacturer(name, details) values
('Volkswagen', 'Some details...'), #1
('Dodge', 'Details...'), #2
('Toyota', 'Some details'), #3
('BMW', 'Details...'); #4

insert into model(name, year, manufacturer_id) values
('Golf 5', '2008-02-20', 1),
('RAM 1500', '2012-01-15', 2),
('X5', '2015-02-02', 4), #3
('Passat B7', '2009-05-10', 1),
('320', '2004-03-05', 4);

insert into color(name) values
('Червоний'),
('Золотий'),
('Синій'),
('Чорний');

insert into fuel_type(name) values
('Бензин'),
('Дизель'),
('Газ/Бензин'),
('Електро');

insert into vehicle_category(name, description) values
('Кроссовер', 'Опис відсутній'),
('Седан', 'Опис відсутній'),
('Пікап', 'Опис відсутній'),
('Купе', 'Опис відсутній'),
('Мінівен', 'Опис відсутній'),
('Кабріолет', 'Опис відсутній'),
('Універсал', 'Опис відсутній');

insert into drive_type(name, description) values
('RWD', 'Задній привід'),
('FWD', 'Передній привід'),
('4WD', 'Повний привід');

insert into transmission_type(name) values
('Автомат'),
('Типтронік'),
('Варіатор'),
('Механіка');

insert into vehicle(reg_number, current_km, engine_size, daily_hire_rate, model_id,
vehicle_category_id, color_id, fuel_type_id, drive_type_id, transmission_type_id) values
('ВС 0001 СВ', 234000.00, 2.5, 1200.00, 3, 1, 3, 2, 3, 1),
('ВС 0002 СВ', 96590.00, 1.6, 800.00, 1, 7, 4, 1, 2, 4);
#('ВС 0001 СВ', 234000.00, 2.5, 1200.00, 3, 1, 3, 2, 3, 1),
#('ВС 0001 СВ', 234000.00, 2.5, 1200.00, 3, 1, 3, 2, 3, 1);

insert into country(name) values
('Україна'),
('Польша'),
('Італія');

insert into town(name, country_id) values 
('Львів', 1),
('Тернопіль', 1),
('Івано-Франківськ', 1),
('Варшава', 2),
('Рим', 3);

insert into gender(name) values
('Чоловік'),
('Жінка');

insert into customer(first_name, last_name, details, email, birthday,
phone_number, town_id, gender_id) values
('Василь', 'Васильович', 'Новий клієнт..', 'vasyl@gmail.com', '1991-02-20',
 '+380000001191', 1, 1),
('Петро', 'Петрович', 'Новий клієнт..', 'petro@gmail.com', '1989-02-14',
 '+380000001991', 2, 1),
('Іван', 'Іванович', 'Новий клієнт..', 'ivan@gmail.com', '1980-02-14',
 '+380000001999', 3, 1);

insert into booking_status(name, description) values
('PEND', 'Empty...'),
('PAID', 'Empty...'),
('WAIT', 'Empty...');

insert into booking(customer_id, vehicle_id, date_from, date_to,
payment_received, booking_status_id) values
(2, 1, '2018-08-15', '2018-08-20', true, 2),
(3, 2, '2018-09-11', '2018-09-25', false, 3);



