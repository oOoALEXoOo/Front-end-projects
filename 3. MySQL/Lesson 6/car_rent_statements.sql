select * from manufacturer;
select * from model;

select 
	m.name as model_name,
    m.year,
    mn.name as manufacturer_name
from model m 
	inner join manufacturer mn 
		on m.manufacturer_id = mn.id;
     
select * from vehicle;
     
select
	v.reg_number,
    v.current_km,
    v.engine_size,
    v.daily_hire_rate,
    m.name as model_name,
    vc.name as vehicle_category_name,
    c.name as color_name,
    ft.name as fuel_type_name,
    dt.name as drive_type_name,
    tt.name as transmission_type_name
from vehicle v
join model m on v.model_id = m.id
join vehicle_category vc on v.vehicle_category_id = vc.id
join color c on v.color_id = c.id
join fuel_type ft on v.fuel_type_id = ft.id
join drive_type dt on v.drive_type_id = dt.id
join transmission_type tt on v.transmission_type_id = tt.id;

select * from booking;
select * from customer;

select
	b.date_from,
    b.date_to,
    c.first_name,
    c.last_name,
    c.email,
    c.birthday,
    t.name as town_name,
    co.name as country_name,
    g.name as gender,
    v.reg_number,
    v.current_km,
    v.engine_size,
    v.daily_hire_rate,
    m.name as model_name,
    vc.name as vehicle_category_name,
    col.name as color_name,
    ft.name as fuel_type_name,
    dt.name as drive_type_name,
    tt.name as transmission_type_name
from booking b
join customer c on b.customer_id = c.id
join town t on c.town_id = t.id
right join country co on t.country_id = co.id
join gender g on c.gender_id = g.id
join vehicle v on b.vehicle_id = v.id
join model m on v.model_id = m.id
join vehicle_category vc on v.vehicle_category_id = vc.id
join color col on v.color_id = col.id
join fuel_type ft on v.fuel_type_id = ft.id
join drive_type dt on v.drive_type_id = dt.id
join transmission_type tt on v.transmission_type_id = tt.id



