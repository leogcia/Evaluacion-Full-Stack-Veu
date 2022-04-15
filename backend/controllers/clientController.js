const pool = require('../settings/db');


const getAllClients = async (req, res) => {
    await pool.query('SELECT * FROM clientes', (err, filas) => {
        if(err) {
            throw err;
        } else {
            res.send(filas);
        }
    })
};

const getOneClient = async (req, res) => {
    await pool.query('SELECT * FROM clientes WHERE id = ?',[req.params.id], (err, fila) => {
        if(err) {
            throw err;
        } else {
            res.send(fila);
        }
    })
};

const postClient = async (req, res) => {
    const data = { nombre, telefono, ultimo_pago, fecha_creacion } = req.body;
    const sql = 'INSERT INTO clientes SET ?';
    await pool.query(sql, data, (err, results) => {
        if(err) {
            throw err;
        } else {
            res.send(results);
        }
    });
};

const editClient = async (req, res) => {
    const { id } = req.params;
    const nombre = req.body.nombre;
    const telefono = req.body.telefono;
    const ultimo_pago = req.body.ultimo_pago;
    const fecha_creacion = req.body.fecha_creacion;
    const sql = 'UPDATE clientes SET nombre = ?, telefono = ?, ultimo_pago = ?, fecha_creacion = ? WHERE id = ?';
    await pool.query(sql, [nombre, telefono, ultimo_pago, fecha_creacion, id], (err, results) => {
        if(err) {
            throw err;
        } else {
            res.send(results);
        }
    });
};

const deleteClient = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM clientes WHERE id = ?', id, (err, filas) => {
        if(err) {
            throw err;
        } else {
            res.send(filas);
        }
    });
};


module.exports = {
    getAllClients,
    getOneClient,
    postClient,
    editClient,
    deleteClient
}