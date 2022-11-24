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
    response varchar(255) NOT NULL
);

INSERT INTO responses VALUES('Hola','¿Sientes que constantemente te falta tiempo para ti?'),('Si','Cada vez que tienes una situación en la que debes decidir, ¿sientes que lo piensas demasiado?'),
('Si, muy seguido','Si no me contesta los mensajes de WhatsApp pienso que no le importo'),('Si','Si alguien comete un error siento mucha rabia'),
('Si, soy mu exigente','Cuando tienes una idea de negocio, ¿prefieres ser optimista antes que planificar?'),('Si, así atraigo lo bueno','Ta bien, ta falta coito, aqui hay un link de los god pornhub.com');

CREATE TABLE conversattion(
    mensaje varchar(255) NOT NULL,
    tipo int NOT NULL,
    usuario int NOT NULL,
    FOREIGN KEY (usuario) REFERENCES users (idUser)
);