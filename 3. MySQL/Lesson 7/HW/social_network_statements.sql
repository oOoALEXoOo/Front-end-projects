select * from messages;
select * from alboms;
select * from photos;
select * from albom_photo;

select
	us.username as sender_username,
    us.password as sender_password,
    us.email as sender_email,
    us.created_at as sender_created_at,
    m.text as message_text,
    m.created_at as message_created_at,
    ur.username as receiver_username,
    ur.password as receiver_password,
    ur.email as receiver_email,
    ur.created_at as receiver_created_at
from messages m
join users us on m.user_sender_id = us.id
join users ur on m.user_receiver_id = ur.id;

select
	u.username as user_username,
    u.password as user_password,
    u.email as user_email,
    u.created_at as user_created_at,
    albm.name as albom_name,
    albm.qty_photos as albom_qty_photos,
    albm.created_at as albom_created_at
from user_albom ualbm
join users u on ualbm.user_id = u.id
join alboms albm on ualbm.albom_id = albm.id;

select
	u.username as user_username,
    u.password as user_password,
    u.email as user_email,
    u.created_at as user_created_at,
    ph.image_url as photo_image_url,
    ph.created_at as photo_created_at
from user_photo uph
join users u on uph.user_id = u.id
join photos ph on uph.photo_id = ph.id;

select
	a.name as albom_name,
    a.qty_photos as albom_qty_photos,
    a.created_at as albom_created_at,
    ph.image_url as photo_image_url,
    ph.created_at as photo_created_at
from albom_photo aph
join alboms a on aph.albom_id = a.id
join photos ph on aph.photo_id = ph.id;


select * from alboms;
select count(*) as large_alboms from alboms where qty_photos > 500;
select * from alboms order by qty_photos desc;
select max(a.qty_photos) from alboms a;
select avg(a.qty_photos) from alboms a;

select * from users;
select * from users order by created_at;
select * from users where email like '%gmail%';
select * from users where email like '%yandex%';
select * from users where email like '%ukr_net%';
select * from users where email like '%ua';

select
	us.username as sender_username,
    us.password as sender_password,
    us.email as sender_email,
    us.created_at as sender_created_at,
    m.text as message_text,
    m.created_at as message_created_at,
    ur.username as receiver_username,
    ur.password as receiver_password,
    ur.email as receiver_email,
    ur.created_at as receiver_created_at
from messages m
join users us on m.user_sender_id = us.id
join users ur on m.user_receiver_id = ur.id
	order by m.created_at;
    
select
	u.username as user_username,
    u.password as user_password,
    u.email as user_email,
    u.created_at as user_created_at,
    albm.name as albom_name,
    albm.qty_photos as albom_qty_photos,
    albm.created_at as albom_created_at
from user_albom ualbm
join users u on ualbm.user_id = u.id
join alboms albm on ualbm.albom_id = albm.id
	where albm.qty_photos between 500 and 1000;
    
select
	u.username as user_username,
    u.password as user_password,
    u.email as user_email,
    u.created_at as user_created_at,
    ph.image_url as photo_image_url,
    ph.created_at as photo_created_at
from user_photo uph
join users u on uph.user_id = u.id
join photos ph on uph.photo_id = ph.id
	where u.created_at > '2018-01-01' order by u.username;
    
select
	a.name as albom_name,
    a.qty_photos as albom_qty_photos,
    a.created_at as albom_created_at,
    ph.image_url as photo_image_url,
    ph.created_at as photo_created_at
from albom_photo aph
join alboms a on aph.albom_id = a.id
join photos ph on aph.photo_id = ph.id
	where a.qty_photos > 1000 limit 3;

set SQL_SAFE_UPDATES = 0;
update users set email = 'forbidden' where email like '%mail.ru';
set SQL_SAFE_UPDATES = 1;
select * from users;