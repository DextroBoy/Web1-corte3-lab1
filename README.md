# Proyecto Integrador — cómo ejecutar y probar

Este proyecto usa PostgreSQL en Docker, un backend Node.js/Express y un frontend Angular.

## Requisitos

- Docker Desktop iniciado.
- Node.js y npm instalados.

## Iniciar la aplicación

Abre tres terminales en la carpeta raíz del proyecto y ejecuta los siguientes comandos en orden:

### 1. Base de datos

En la primera terminal:

```powershell
cd Backend
docker compose up -d
docker compose ps
```

Confirma que los servicios `myDB` y `pdAdmin` aparezcan activos.

### 2. Backend

En la segunda terminal:

```powershell
cd Backend
npm start
```

El backend queda disponible en `http://localhost:3000`. Mantén esta terminal abierta.

### 3. Frontend

En la tercera terminal:

```powershell
cd Frontend
npm start
```

Angular queda disponible en `http://localhost:4200`. Mantén esta terminal abierta.

## Páginas del frontend

Con el frontend iniciado, abre estas direcciones en el navegador:

| Página | URL |
| --- | --- |
| Películas | [http://localhost:4200/movies](http://localhost:4200/movies) |
| Catálogo | [http://localhost:4200/catalog](http://localhost:4200/catalog) |
| Categorías | [http://localhost:4200/categories](http://localhost:4200/categories) |
| Inicio de sesión | [http://localhost:4200/login](http://localhost:4200/login) |

Las páginas de películas, catálogo y categorías cargan sus datos desde el backend. Para consultar nuevamente los datos después de modificarlos en la base de datos, recarga la página.

## APIs para verificar el JSON

Con el backend iniciado, estas rutas devuelven datos JSON:

| Recurso | URL |
| --- | --- |
| Películas | [http://localhost:3000/api/movies](http://localhost:3000/api/movies) |
| Películas del catálogo | [http://localhost:3000/api/catalog/movies](http://localhost:3000/api/catalog/movies) |
| Categorías del catálogo | [http://localhost:3000/api/catalog/categories](http://localhost:3000/api/catalog/categories) |
| Categorías | [http://localhost:3000/api/categorias](http://localhost:3000/api/categorias) |
| Documentación de la API | [http://localhost:3000/api/docs](http://localhost:3000/api/docs) |

## Servicios auxiliares

- pgAdmin: [http://localhost:8081](http://localhost:8081)
- PostgreSQL desde el equipo local: `localhost:5433`

Si una página no carga sus datos, confirma que Docker esté activo y que el backend siga ejecutándose en su terminal.
