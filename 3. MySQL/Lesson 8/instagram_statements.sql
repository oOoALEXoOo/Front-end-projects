update users set is_deleted = true where id in (2, 34, 45, 23, 65, 4, 67, 78, 98, 3, 87, 45);

select * from users where is_deleted = false;
select count(*) from users where is_deleted = false;
select * from users where is_deleted = false order by created_at desc;
select * from users where is_deleted = false and id = 10;
select * from users where is_deleted = false and username = 'Meggie_Doyle';
select max(created_at) from users where is_deleted = false;
select * from users where is_deleted = false 
	and created_at = (select min(created_at) from users where is_deleted = false);
select * from users where is_deleted = false and created_at > '2016-10-01';
select * from users where is_deleted = false
	and created_at between '2016-10-01' and '2017-02-10';
select * from users where is_deleted = false and username like '%nn%';
select * from users where username like 'd_r%';

update photos set is_deleted = true where id in (2, 34, 45, 23, 65, 67, 56, 87, 13, 123, 325, 250);
select * from photos where is_deleted = true;
select count(*) from photos where is_deleted = false;

select 
	* 
from photos p
join users u on p.user_id = u.id
	and p.is_deleted = false
    and u.is_deleted = false;
    
select 
	* 
from photos p
join users u on p.user_id = u.id
	and p.is_deleted = false
    and u.is_deleted = false
    and u.id = 88 order by p.image_url desc;
    
update comments set is_deleted = true where id in (1000, 2000, 100, 200, 500);
    
select * from comments where is_deleted = false;  

select 
	u.username as comment_user,
    p.image_url,
    c.comment_text,
    uu.username as photo_creator
from comments c
join photos p on p.id = c.photo_id
	and p.is_deleted = false
    and c.is_deleted = false
join users u on u.id = p.user_id
	and u.is_deleted = false
join users uu on p.user_id = uu.id
	and uu.is_deleted = false
    and uu.id = 1;
    
#select * from users where is_deleted = false and username like 'Kenton_Kirlin';

select 
	p.image_url,
    t.tag_name
from photo_tag pt
join photos p on p.id = pt.photo_id
	and p.is_deleted = false
join tags t on t.id = pt.tag_id
	and t.is_deleted = false
    and p.id = 1;

select 
	u.username as follower,
    uu.username as followee
from follows f
join users u on f.follower_id = u.id
	and u.is_deleted = false
join users uu on f.followee_id = uu.id
	and uu.is_deleted = false;

select 
	u.username,
    p.image_url
from likes l
join users u on l.user_id = u.id
	and u.is_deleted = false
join photos p on p.id = l.photo_id
	and p.is_deleted = false
    and u.created_at > '2017-01-01';
    
select * from users;

select 
	u.username,
    u.created_at,
    p.image_url,
    t.tag_name,
    c.comment_text,
    uu.username as comment_user
from users u
join photos p on p.user_id = u.id
	and u.is_deleted = false
    and p.is_deleted = false
join photo_tag pt on p.id = pt.photo_id
join tags t on pt.tag_id = t.id
	and t.is_deleted = false
join comments c on c.photo_id = p.id
join users uu on c.user_id = uu.id
	and uu.is_deleted = false
join likes l on l.user_id = u.id
join likes l2 on l.photo_id = p.id;
