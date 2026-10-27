-- Estudiantes
INSERT INTO students_example (nombre, correo) 
VALUES
    ('Carlos Ramirez', 'carlos.example@example.com'),
    ('Laura Gomez', 'laura.example@example.com'),
    ('Andres Martinez', 'andres.example@example.com')
ON CONFLICT (correo) DO NOTHING;

-- Cursos (solo inserta los que aún no existen por nombre)
INSERT INTO courses_example (nombre, creditos)
SELECT v.nombre, v.creditos
FROM (VALUES
    ('Bases de Datos', 3),
    ('Programacion Web', 4),
    ('Arquitectura de Software', 3)
) AS v(nombre, creditos)
WHERE NOT EXISTS (
    SELECT 1 FROM courses_example ce WHERE ce.nombre = v.nombre
);

-- Matrículas
INSERT INTO enrollments_example (estudiante_id, curso_id, fecha_matricula, nota_final)
VALUES
    (1, 1, CURRENT_DATE, 4.5),
    (1, 2, CURRENT_DATE, 4.2),
    (2, 1, CURRENT_DATE, 3.8),
    (2, 3, CURRENT_DATE, 4.6),
    (3, 2, CURRENT_DATE, 4.0)
ON CONFLICT DO NOTHING;

-- Categorías (idempotente: evita duplicados por el UNIQUE en nombre)
INSERT INTO categorias (nombre) VALUES
    ('Acción'),
    ('Comedia'),
    ('Drama')
ON CONFLICT (nombre) DO NOTHING;

-- Películas (idempotente: solo inserta si la tabla está vacía)
INSERT INTO movies (nombre, descripcion, fecha, categoria_id)
SELECT v.nombre, v.descripcion, v.fecha::date, c.id
FROM (VALUES
    ('Película 1', 'Descripción de la película 1', '2023-01-01', 'Acción'),
    ('Película 2', 'Descripción de la película 2', '2023-02-01', 'Comedia'),
    ('Película 3', 'Descripción de la película 3', '2023-03-01', 'Drama')
) AS v(nombre, descripcion, fecha, categoria)
JOIN categorias c ON c.nombre = v.categoria
WHERE NOT EXISTS (SELECT 1 FROM movies);