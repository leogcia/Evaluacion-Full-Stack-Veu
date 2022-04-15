CREATE TABLE clientes (
    id INT(11) NOT NULL,
    nombre VARCHAR(45) NOT NULL,
    telefono CHAR(20) NOT NULL,
    ultimo_pago TIMESTAMP NOT NULL,
    fecha_creacion TIMESTAMP NOT NULL
);
ALTER TABLE clientes 
    ADD PRIMARY KEY (id);

ALTER TABLE clientes 
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;


CREATE TABLE pagos (
    id INT(11) NOT NULL,
    cliente int(11),
    CONSTRAINT fk_cliente FOREIGN KEY(cliente) REFERENCES clientes(id),  
    monto DECIMAL(19,4) NOT NULL,
    fecha_creacion TIMESTAMP NOT NULL
);
ALTER TABLE pagos 
    ADD PRIMARY KEY (id);
ALTER TABLE pagos 
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;