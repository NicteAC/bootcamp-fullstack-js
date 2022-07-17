--Parte 1
--1. Crear una base de datos con nombre “Posts”.
create database posts;
--2. Crear una tabla “post”, con los atributos id, nombre de usuario, fecha de creación, contenido y descripción.
create table post (
	id int,
	nombre_usuario varchar(25),
	fecha_creacion date,
	contenido varchar(500),
	descripcion varchar(100),
	primary key (id)
);
select *
from post;
--3. Insertar 3 post, 2 para el usuario "Pamela" y uno para "Carlos".
insert into post (
		id,
		nombre_usuario,
		fecha_creacion,
		contenido,
		descripcion
	)
values (
		1,
		'Pamela',
		'2022-06-28',
		'Estamos en busqueda de un Front-End',
		'Front-End'
	);
insert into post (
		id,
		nombre_usuario,
		fecha_creacion,
		contenido,
		descripcion
	)
values (
		2,
		'Pamela',
		'2022-06-28',
		'Estamos en busqueda de un Back-End',
		'Back-End'
	);
insert into post (
		id,
		nombre_usuario,
		fecha_creacion,
		contenido,
		descripcion
	)
values (
		3,
		'Carlos',
		'2022-07-02',
		'Busco trabajo como Full-Stack',
		'FullStack'
	);
--4. Modificar la tabla post, agregando la columna título.
alter table post
add titulo varchar(50);
--5. Agregar título a las publicaciones ya ingresadas.
update post
set titulo = 'Oferta laboral'
where id = '1';
update post
set titulo = 'Oferta laboral'
where id = '2';
update post
set titulo = 'Oferta laboral'
where id = '3';
--6. Insertar 2 post para el usuario "Pedro".
insert into post (
		id,
		nombre_usuario,
		fecha_creacion,
		contenido,
		descripcion,
		titulo
	)
values (
		4,
		'Pedro',
		'2022-07-05',
		'Busco compañeros para aprender CSS',
		'Aprende CSS',
		'Sesiones de estudio'
	);
insert into post (
		id,
		nombre_usuario,
		fecha_creacion,
		contenido,
		descripcion,
		titulo
	)
values (
		5,
		'Pedro',
		'2022-07-05',
		'Busco compañeros para aprender JS',
		'Aprende JS',
		'Sesiones de estudio'
	);
--7. Eliminar el post de Carlos.
delete from post
where id = '3';
--8. Ingresar un nuevo post para el usuario "Carlos".
insert into post (
		id,
		nombre_usuario,
		fecha_creacion,
		contenido,
		descripcion,
		titulo
	)
values (
		6,
		'Pedro',
		'2022-07-10',
		'Busco trabajo como Front-End',
		'Front-End',
		'Oferta laboral'
	);
--Parte 2
--1. Crear una nueva tabla llamada “comentarios”, con los atributos id, fecha, hora de creación y contenido, que se relacione con la tabla posts.
create table comentarios(
	id int,
	fecha_creacion date,
	hora_creacion time,
	contenido varchar(100),
	foreign key (id) references post(id)
);
select *
from comentarios;
--2. Crear 2 comentarios para el post de "Pamela" y 4 para "Carlos".
insert into comentarios (
		id,
		fecha_creacion,
		hora_creacion,
		contenido
	)
values (
		1,
		'2022-07-10',
		'08:20:45',
		'Pamela, @Carlos se encuentra buscando trabajo como Front'
	);
insert into comentarios (
		id,
		fecha_creacion,
		hora_creacion,
		contenido
	)
values (
		1,
		'2022-07-10',
		'14:30:24',
		'Pamela, favor indicar donde enviar CV'
	);
insert into comentarios (
		id,
		fecha_creacion,
		hora_creacion,
		contenido
	)
values (
		6,
		'2022-07-10',
		'09:30:05',
		'Carlos, Contacta por interno a @Pamela'
	);
insert into comentarios (
		id,
		fecha_creacion,
		hora_creacion,
		contenido
	)
values (
		6,
		'2022-07-10',
		'10:20:45',
		'Comparte tu CV para ver tu experiencia'
	);
insert into comentarios (
		id,
		fecha_creacion,
		hora_creacion,
		contenido
	)
values (
		6,
		'2022-07-10',
		'12:10:33',
		'A modo de consejo publica tu Portfolio'
	);
insert into comentarios (
		id,
		fecha_creacion,
		hora_creacion,
		contenido
	)
values (
		6,
		'2022-07-10',
		'13:20:05',
		'En mi empresa estan buscando un Front, hablame por inbox'
	);
select *
from comentarios;
--3. Crear un nuevo post para "Margarita".
insert into post (
		id,
		nombre_usuario,
		fecha_creacion,
		contenido,
		descripcion,
		titulo
	)
values (
		7,
		'Margarita',
		'2022-07-20',
		'Busco ex-alumnos para un programa piloto de Angular',
		'Aprende Angular',
		'Programa piloto'
	);
select *
from post;
--4. Ingresar 5 comentarios para el post de Margarita.
insert into comentarios (
		id,
		fecha_creacion,
		hora_creacion,
		contenido
	)
values (
		7,
		'2022-07-10',
		'13:20:05',
		'Interesad@, hablame por inbox'
	);
insert into comentarios (
		id,
		fecha_creacion,
		hora_creacion,
		contenido
	)
values (
		7,
		'2022-07-10',
		'13:20:05',
		'Cuales son los pasos a seguir?'
	);
insert into comentarios (
		id,
		fecha_creacion,
		hora_creacion,
		contenido
	)
values (
		7,
		'2022-07-10',
		'13:20:05',
		'Más info porfavor'
	);
insert into comentarios (
		id,
		fecha_creacion,
		hora_creacion,
		contenido
	)
values (
		7,
		'2022-07-10',
		'13:20:05',
		'Te deje mensaje privado'
	);
insert into comentarios (
		id,
		fecha_creacion,
		hora_creacion,
		contenido
	)
values (
		6,
		'2022-07-10',
		'13:20:05',
		'Me interesa!!!'
	);
select *
from comentarios;