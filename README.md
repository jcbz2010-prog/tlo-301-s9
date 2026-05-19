# API REST de Clientes

## Descripción
API REST para gestión de clientes con operaciones CRUD (Crear, Leer, Actualizar, Eliminar). Desarrollada para la actividad sumativa de la Semana 9 del curso **Taller de plataformas web**.

## Tecnologías utilizadas
- **Node.js** - Entorno de ejecución JavaScript
- **Express** - Framework web para Node.js
- **MySQL** - Base de datos relacional
- **mysql2** - Conector de MySQL con promesas
- **dotenv** - Manejo de variables de entorno
- **cors** - Middleware para peticiones cross-origin
- **nodemon** - Reinicio automático del servidor (desarrollo)
- **Postman** - Pruebas de endpoints

## Requisitos previos

| Herramienta | Versión | Enlace |
|-------------|---------|--------|
| Node.js | v18 o superior | [https://nodejs.org](https://nodejs.org) |
| MySQL (o XAMPP) | v8 o superior | [https://www.mysql.com](https://www.mysql.com) |
| Postman | Última versión | [https://www.postman.com](https://www.postman.com) |

## Instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/jcbz2010-prog/tlo-301-s9.git
cd tlo-301-s9
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crear archivo `.env`:
```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=taller_web
```

### 4. Crear la base de datos
```sql
CREATE DATABASE taller_web;
USE taller_web;

CREATE TABLE cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(20),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### 5. Iniciar el servidor
```bash
npm run dev
```

El servidor correrá en `http://localhost:3000`

## Endpoints de la API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/clientes` | Obtener todos los clientes |
| GET | `/api/clientes/:id` | Obtener cliente por ID |
| POST | `/api/clientes` | Crear nuevo cliente |
| PUT | `/api/clientes/:id` | Actualizar cliente |
| DELETE | `/api/clientes/:id` | Eliminar cliente |

## Ejemplo de error 409 (email duplicado)

**Respuesta:**
```json
{
    "success": false,
    "error": "El email ya está registrado"
}
```

## Colección de Postman

El archivo `API clientes -CRUD.postman_collection.json` contiene todos los endpoints para pruebas.

## Estructura del proyecto

```
TLO-301-S9/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── clienteController.js
│
├── middleware/
│   └── errorHandler.js
│
├── node_modules/
│
├── postman/
│   └── API clientes -CRUD.postman_collection.json
│
├── routes/
│   └── clienteRoutes.js
│
├── .env
├── .gitignore
├── database.sql
├── package-lock.json
├── package.json
├── README.md
└── server.js
```
