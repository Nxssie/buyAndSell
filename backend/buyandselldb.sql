create database buyandsell;

use buyandsell;

create table users
(
    id       bigint auto_increment
        primary key,
    username varchar(20) null,
    email    varchar(70) null,
    password varchar(50) null
);

create table cars
(
    id      bigint auto_increment
        primary key,
    brand   varchar(30)            not null,
    model   varchar(30)            not null,
    kms     int unsigned default 0 not null,
    year    year                   null,
    user_id bigint                 null,
    constraint cars_users_id_fk
        foreign key (user_id) references users (id)
);


