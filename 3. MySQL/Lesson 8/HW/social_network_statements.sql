select * from users;
update users set is_deleted = true where id in (2, 4, 8, 12, 15);

update alboms a
join user_albom ua on a.id = ua.albom_id
set a.is_deleted = true where ua.user_id in (2, 4, 8, 12, 15);

select * from user_albom where user_id in (2, 4, 8, 12, 15);
select * from alboms where is_deleted = true;

update photos p
join user_photo up on p.id = up.photo_id
set p.is_deleted = true where up.user_id in (2, 4, 8, 12, 15);

select * from user_photo where user_id in (2, 4, 8, 12, 15);
select * from photos where is_deleted = true;

select
	us.id,
	us.username as sender_username,
    us.password as sender_password,
    us.email as sender_email,
    us.created_at as sender_created_at,
    us.is_deleted,
    m.text as message_text,
    m.created_at as message_created_at,
    ur.username as receiver_username,
    ur.password as receiver_password,
    ur.email as receiver_email,
    ur.created_at as receiver_created_at,
    ur.is_deleted
from messages m
join users us on m.user_sender_id = us.id
join users ur on m.user_receiver_id = ur.id
	and us.is_deleted = false
    and ur.is_deleted = false;

select * from alboms;
select * from user_albom;

select
	u.id,
	u.username as user_username,
    u.password as user_password,
    u.email as user_email,
    u.created_at as user_created_at,
    albm.id,
    albm.name as albom_name,
    albm.qty_photos as albom_qty_photos,
    albm.created_at as albom_created_at
from user_albom ualbm
join users u on ualbm.user_id = u.id
join alboms albm on ualbm.albom_id = albm.id
	and u.is_deleted = false
    and albm.is_deleted = false;

select
	u.id,
	u.username as user_username,
    u.password as user_password,
    u.email as user_email,
    u.created_at as user_created_at,
    ph.id,
    ph.image_url as photo_image_url,
    ph.created_at as photo_created_at
from user_photo uph
join users u on uph.user_id = u.id
join photos ph on uph.photo_id = ph.id
	and u.is_deleted = false
    and ph.is_deleted = false;

select
	a.name as albom_name,
    a.qty_photos as albom_qty_photos,
    a.created_at as albom_created_at,
    ph.image_url as photo_image_url,
    ph.created_at as photo_created_at
from albom_photo aph
join alboms a on aph.albom_id = a.id
join photos ph on aph.photo_id = ph.id
	and a.is_deleted = false
    and ph.is_deleted = false;

select * from messages;
select * from alboms;
select * from photos;
select * from albom_photo;

select 
	us.username as user_sender_username,
    us.password as user_sender_password,
    us.email as user_sender_email,
    us.created_at as user_sender_created_at,
    aus.name as user_sender_albom_name,
    usp.image_url as user_sender_photo_image_url,
    usp.created_at as user_sender_photo_created_at,
    usp.is_deleted as user_sender_photo_is_deleted,
    aus.qty_photos as user_sender_albom_qty_photos,
    aus.created_at as user_sender_albom_created_at,
    aus.is_deleted as user_sender_albom_is_deleted,
    us.is_deleted as user_sender_is_deleted,
    m.text as message_text,
    m.created_at as message_created_at,
    ur.username as user_receiver_username,
    ur.password as user_receiver_password,
    ur.email as user_receiver_email,
    ur.created_at as user_receiver_created_at,
    aur.name as user_receiver_albom_name,
    urp.image_url as user_receiver_photo_image_url,
    urp.created_at as user_receiver_photo_created_at,
    urp.is_deleted as user_receiver_photo_is_deleted,
    aur.qty_photos as user_receiver_albom_qty_photos,
    aur.created_at as user_receiver_albom_created_at,
    aur.is_deleted as user_receiver_albom_is_deleted,
    ur.is_deleted as user_receiver_is_deleted
from users us
join messages m on us.id = m.user_sender_id
join users ur on m.user_receiver_id = ur.id
	and us.is_deleted = false
    and ur.is_deleted = false
join user_albom usa on us.id = usa.user_id
join alboms aus on aus.id = usa.albom_id
	and aus.is_deleted = false
join user_albom ura on ur.id = ura.user_id
join alboms aur on aur.id = ura.albom_id
	and aur.is_deleted = false
join albom_photo ausp on aus.id = ausp.albom_id
join photos usp on usp.id = ausp.photo_id
	and usp.is_deleted = false
join albom_photo aurp on aur.id = aurp.albom_id
join photos urp on urp.id = aurp.photo_id
	and urp.is_deleted = false;
#переборщив..)



select * from alboms;
select count(*) as large_alboms from alboms where qty_photos > 500
	and is_deleted = false;
select * from alboms where is_deleted = false order by qty_photos desc;
select max(a.qty_photos) from alboms a where is_deleted = false;
select avg(a.qty_photos) from alboms a where is_deleted = false;

select * from users;
select * from users where is_deleted = false order by created_at;
select * from users where email like '%gmail%' and is_deleted = false;
select * from users where email like '%yandex%' and is_deleted = false;
select * from users where email like '%ukr_net%' and is_deleted = false;
select * from users where email like '%ua' and is_deleted = false;

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
	order by m.created_at
    and us.is_deleted = false
    and ur.is_deleted = false;
    
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
	where albm.qty_photos between 500 and 1000
    and u.is_deleted = false
    and albm.is_deleted = false;
    
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
	where u.created_at > '2018-01-01' order by u.username
    and u.is_deleted = false
    and ph.is_deleted = false;
    
select
	a.name as albom_name,
    a.qty_photos as albom_qty_photos,
    a.created_at as albom_created_at,
    ph.image_url as photo_image_url,
    ph.created_at as photo_created_at
from albom_photo aph
join alboms a on aph.albom_id = a.id
join photos ph on aph.photo_id = ph.id
	where a.qty_photos > 300
    and a.is_deleted = false
    and ph.is_deleted = false
    limit 2;

set SQL_SAFE_UPDATES = 0;
update users set email = 'forbidden' where email like '%mail.ru' and is_deleted = true;
set SQL_SAFE_UPDATES = 1;