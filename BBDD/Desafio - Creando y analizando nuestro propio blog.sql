--1. Crear base de datos llamada blog. (1 Punto)
create database blog;
--2. Crear las tablas indicadas de acuerdo al modelo de datos. (2 Puntos)
create table usuarios(id int, email varchar(50), primary key (id));
create table posts(
    id int,
    usuario_id int,
    titulo varchar(50),
    fecha date,
    primary key (id),
    FOREIGN KEY(usuario_id) REFERENCES usuarios(id)
);
create table comentarios(
    id INT,
    post_id INT,
    usuario_id INT,
    texto VARCHAR(100),
    fecha date,
    PRIMARY KEY(id),
    FOREIGN KEY(usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY(post_id) REFERENCES posts(id)
);
--3. Insertar los siguientes registros. (1 Punto)
select *
from usuarios;
copy usuarios
from 'C:\Users\carol\Desktop\fullstack\BBDD\usuarios.csv' delimiter ',' csv header;
select *
from posts;
copy posts
from 'C:\Users\carol\Desktop\fullstack\BBDD\posts.csv' delimiter ',' csv header;
select *
from comentarios;
copy comentarios
from 'C:\Users\carol\Desktop\fullstack\BBDD\comentarios.csv' delimiter ',' csv header;
--4. Seleccionar el correo, id y título de todos los post publicados por el usuario 5. (1 Punto)
select *
from usuarios
    left join posts on usuarios.id = posts.usuario_id
where usuario_id = 5;
--5. Listar el correo, id y el detalle de todos los comentarios que no hayan sido realizados por el usuario con email usuario06@hotmail.com. (1 Punto)
SELECT *
from usuarios
    left join comentarios on usuarios.id = comentarios.usuario_id
where usuarios.email != 'usuario06@hotmail.com';
--6. Listar los usuarios que no han publicado ningún post. (1 Punto)
select *
from usuarios
    left join posts on usuarios.id = posts.usuario_id
where titulo is null;
--7. Listar todos los post con sus comentarios (incluyendo aquellos que no poseen comentarios). (1 Punto)
select *
from posts
    full outer join comentarios on posts.id = comentarios.post_id;
--8. Listar todos los usuarios que hayan publicado un post en Junio. (2 Puntos)
select usuarios.id,
    email
FROM usuarios
    LEFT JOIN posts on usuarios.id = posts.usuario_id
WHERE fecha between '2020-06-01' and '2020-06-30';