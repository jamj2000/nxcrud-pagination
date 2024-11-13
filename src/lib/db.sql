DROP DATABASE IF EXISTS productos;

CREATE DATABASE productos;
USE productos;


CREATE TABLE productos (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    descripcion VARCHAR(200),
    precio DECIMAL(10,2),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE productos ADD COLUMN imagen VARCHAR(200) AFTER descripcion;

INSERT INTO productos (nombre, descripcion, precio, imagen) 
VALUES 
  ('Monitor 17 pulgadas A', 'Monitor plano LCD', 110.22, '/images/monitor.jpg'),
  ('Teclado A', 'Teclado USB en español', 20.12, '/images/teclado.jpg'),
  ('Impresora A', 'Impresora láser a color', 360.05, '/images/impresora.jpg'),
  ('Monitor 17 pulgadas B', 'Monitor plano LCD', 110.22, '/images/monitor.jpg'),
  ('Teclado B', 'Teclado USB en español', 20.12, '/images/teclado.jpg'),
  ('Impresora B', 'Impresora láser a color', 360.05, '/images/impresora.jpg'),
  ('Monitor 17 pulgadas C', 'Monitor plano LCD', 110.22, '/images/monitor.jpg'),
  ('Teclado C', 'Teclado USB en español', 20.12, '/images/teclado.jpg'),
  ('Impresora C', 'Impresora láser a color', 360.05, '/images/impresora.jpg'),
  ('Monitor 17 pulgadas D', 'Monitor plano LCD', 110.22, '/images/monitor.jpg'),
  ('Teclado D', 'Teclado USB en español', 20.12, '/images/teclado.jpg'),
  ('Impresora D', 'Impresora láser a color', 360.05, '/images/impresora.jpg'),
  ('Monitor 17 pulgadas E', 'Monitor plano LCD', 110.22, '/images/monitor.jpg'),
  ('Teclado E', 'Teclado USB en español', 20.12, '/images/teclado.jpg'),
  ('Impresora E', 'Impresora láser a color', 360.05, '/images/impresora.jpg'),
  ('Monitor 17 pulgadas F', 'Monitor plano LCD', 110.22, '/images/monitor.jpg'),
  ('Teclado F', 'Teclado USB en español', 20.12, '/images/teclado.jpg'),
  ('Impresora F', 'Impresora láser a color', 360.05, '/images/impresora.jpg'),
  ('Monitor 17 pulgadas G', 'Monitor plano LCD', 110.22, '/images/monitor.jpg'),
  ('Teclado G', 'Teclado USB en español', 20.12, '/images/teclado.jpg'),
  ('Impresora G', 'Impresora láser a color', 360.05, '/images/impresora.jpg'),
  ('Monitor 17 pulgadas H', 'Monitor plano LCD', 110.22, '/images/monitor.jpg'),
  ('Teclado H', 'Teclado USB en español', 20.12, '/images/teclado.jpg'),
  ('Impresora H', 'Impresora láser a color', 360.05, '/images/impresora.jpg'),
  ('Monitor 17 pulgadas I', 'Monitor plano LCD', 110.22, '/images/monitor.jpg'),
  ('Teclado I', 'Teclado USB en español', 20.12, '/images/teclado.jpg'),
  ('Impresora I', 'Impresora láser a color', 360.05, '/images/impresora.jpg'),
  ('Monitor 17 pulgadas J', 'Monitor plano LCD', 110.22, '/images/monitor.jpg'),
  ('Teclado J', 'Teclado USB en español', 20.12, '/images/teclado.jpg'),
  ('Impresora J', 'Impresora láser a color', 360.05, '/images/impresora.jpg'),
  ('Monitor 17 pulgadas K', 'Monitor plano LCD', 110.22, '/images/monitor.jpg'),
  ('Teclado K', 'Teclado USB en español', 20.12, '/images/teclado.jpg'),
  ('Impresora K', 'Impresora láser a color', 360.05, '/images/impresora.jpg');