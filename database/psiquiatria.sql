DROP DATABASE psiquiatria; 
CREATE DATABASE psiquiatria;
USE psiquiatria;
CREATE TABLE users(
    idUser int auto_increment,
    nombre varchar(255) NOT NULL,
    app varchar(255) NOT NULL,
    apm varchar(255) NOT NULL,
    genero varchar(255) NOT NULL,
    edad varchar(255) NOT NULL,
    telefono varchar(10) NOT NULL,
    email varchar(255) NOT NULL,
    contra varchar( 255) NOT NULL,
    PRIMARY KEY (idUser)
)ENGINE=InnoDB;

CREATE TABLE responses(
    cuestion varchar(255) NOT NULL,
    response varchar(255   ) NOT NULL
);

INSERT INTO responses VALUES('como es posible','no lo se tu dime');

CREATE TABLE conversattion(
    mensaje varchar(255) NOT NULL,
    tipo int NOT NULL,
    usuario int NOT NULL,
    FOREIGN KEY (usuario) REFERENCES users (idUser)
);