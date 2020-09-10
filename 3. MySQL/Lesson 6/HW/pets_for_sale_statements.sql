select * from pet;
select * from breed;
select * from cat_breed;
select * from breeder;

select
	p.name as pet_name,
    t.name as pet_type,
    cb.name as cat_breed,
    db.name as dog_breed,
    p.date_of_birth as pet_date_of_birth,
    c.name as color,
    gp.name as pet_gender,
    p.price,
    br.first_name as breeder_first_name,
    br.last_name as breeder_last_name,
    br.reviews_rating as breeder_reviews_rating,
    br.email as breeder_email,
    br.date_of_birth as breeder_date_of_birth,
    br.phone_number as breeder_phone_number,
    gbr.name as breeder_gender,
    tw.name as breeder_town,
    cn.name as breeder_country
from pet p
join breed b on p.breed_id = b.id
join type t on b.type_id = t.id
left join cat_breed cb on b.cat_breed_id = cb.id
left join dog_breed db on b.dog_breed_id = db.id
join color c on p.color_id = c.id
join breeder br on p.breeder_id = br.id
join gender gp on p.gender_id = gp.id 
join town tw on br.town_id = tw.id
join country cn on tw.country_id = cn.id
join gender gbr on br.gender_id = gbr.id
	order by br.reviews_rating desc;
