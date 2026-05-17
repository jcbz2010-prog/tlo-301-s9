const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);
    
    // Error 1062 = email duplicado en MySQL
    if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({
            success: false,
            error: 'El email ya está registrado'
        });
    }
    
    res.status(500).json({
        success: false,
        error: 'Error interno del servidor'
    });
};

module.exports = errorHandler;
