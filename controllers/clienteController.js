const pool = require('../config/db');

// Obtener todos los clientes
const obtenerTodos = async (req, res, next) => {
    try {
        const [rows] = await pool.query('SELECT * FROM cliente ORDER BY id_cliente DESC');
        res.json({ success: true, data: rows });
    } catch (error) {
        next(error);
    }
};

// Obtener cliente por ID
const obtenerPorId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query('SELECT * FROM cliente WHERE id_cliente = ?', [id]);
        
        if (rows.length === 0) {
            return res.status(404).json({ success: false, error: 'Cliente no encontrado' });
        }
        
        res.json({ success: true, data: rows[0] });
    } catch (error) {
        next(error);
    }
};

// Crear nuevo cliente
const crear = async (req, res, next) => {
    try {
        const { nombre, email, telefono } = req.body;
        
        // Validaciones básicas
        if (!nombre || !email) {
            return res.status(400).json({ 
                success: false, 
                error: 'Nombre y email son requeridos' 
            });
        }
        
        const [result] = await pool.query(
            'INSERT INTO cliente (nombre, email, telefono) VALUES (?, ?, ?)',
            [nombre, email, telefono || null]
        );
        
        const [nuevoCliente] = await pool.query(
            'SELECT * FROM cliente WHERE id_cliente = ?', 
            [result.insertId]
        );
        
        res.status(201).json({ success: true, data: nuevoCliente[0] });
        
    } catch (error) {
        next(error);
    }
};

// Actualizar cliente
const actualizar = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { nombre, email, telefono } = req.body;
        
        // Verificar si existe
        const [existe] = await pool.query('SELECT * FROM cliente WHERE id_cliente = ?', [id]);
        if (existe.length === 0) {
            return res.status(404).json({ success: false, error: 'Cliente no encontrado' });
        }
        
        await pool.query(
            'UPDATE cliente SET nombre = ?, email = ?, telefono = ? WHERE id_cliente = ?',
            [nombre, email, telefono, id]
        );
        
        const [actualizado] = await pool.query(
            'SELECT * FROM cliente WHERE id_cliente = ?', 
            [id]
        );
        
        res.json({ success: true, data: actualizado[0] });
        
    } catch (error) {
        next(error);
    }
};

// Eliminar cliente
const eliminar = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const [result] = await pool.query('DELETE FROM cliente WHERE id_cliente = ?', [id]);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, error: 'Cliente no encontrado' });
        }
        
        res.json({ success: true, message: 'Cliente eliminado correctamente' });
        
    } catch (error) {
        next(error);
    }
};

module.exports = {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar
};
