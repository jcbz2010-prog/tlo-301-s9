-- ======================================================
-- BASE DE DATOS PARA API DE CLIENTES
-- Actividad Semana 9 - Taller de plataformas web
-- ======================================================
-- 
-- Este archivo contiene el esquema completo de la base de datos
-- Ejecutar en phpMyAdmin, MySQL Workbench o terminal MySQL
--
-- ======================================================

-- ======================================================
-- 1. CREAR BASE DE DATOS
-- ======================================================

CREATE DATABASE IF NOT EXISTS taller_web;
USE taller_web;

-- ======================================================
-- 2. CREAR TABLA CLIENTE
-- ======================================================
-- 
-- Campos:
-- - id_cliente: Identificador único (autoincremental)
-- - nombre: Nombre del cliente (obligatorio)
-- - email: Correo electrónico (obligatorio y ÚNICO)
-- - telefono: Número de teléfono (opcional)
-- - created_at: Fecha de registro (automático)
--
-- ======================================================

CREATE TABLE IF NOT EXISTS cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(20),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ======================================================
-- 3. DATOS DE PRUEBA (OPCIONALES)
-- ======================================================

-- Insertar datos de prueba (descomentar para usar)
/*
INSERT INTO cliente (nombre, email, telefono) VALUES 
('Juan Perez', 'juan@ejemplo.com', '123456789'),
('Maria Lopez', 'maria@ejemplo.com', '987654321'),
('Carlos Gomez', 'carlos@ejemplo.com', '555555555');
*/

