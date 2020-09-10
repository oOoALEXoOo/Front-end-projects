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