const pool = require('../settings/db');


const postPagos = async (req, res) => {
    const data = { cliente, monto, fecha_creacion } = req.body;
    const sql = 'INSERT INTO pagos SET ?';
    await pool.query(sql, data, (err, results) => {
        if(err) {
            throw err;
        } else {
            res.send(results);
        }
    });
};

const getAllPagos = async (req, res) => {
    await pool.query('SELECT * FROM pagos', (err, filas) => {
        if(err) {
            throw err;
        } else {
            res.send(filas);
        }
    })
};

const getOnePago = async (req, res) => {
    await pool.query('SELECT * FROM pagos WHERE id = ?',[req.params.id], (err, fila) => {
        if(err) {
            throw err;
        } else {
            res.send(fila);
        }
    })
};

const editPago = async (req, res) => {
    const { id } = req.params;
    const cliente = req.body.cliente;
    const monto = req.body.monto;
    const fecha_creacion = req.body.fecha_creacion;
    const sql = 'UPDATE pagos SET cliente = ?, monto = ?, fecha_creacion = ? WHERE id = ?';
    await pool.query(sql, [cliente, monto, fecha_creacion, id], (err, results) => {
        if(err) {
            throw err;
        } else {
            res.send(results);
        }
    });
};

const deletePago = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM pagos WHERE id = ?', id, (err, filas) => {
        if(err) {
            throw err;
        } else {
            res.send(filas);
        }
    });
};


module.exports = {
    postPagos,
    getAllPagos,
    getOnePago,
    editPago,
    deletePago
}