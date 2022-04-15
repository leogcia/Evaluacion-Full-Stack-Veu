const mysql = require('mysql');
const { database } = require('./keys');
const { promisify } = require('util');

const pool = mysql.createPool(database);

pool.getConnection((err, conn) => {
    if(err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('La conexion con la base de datos se cerró')
        }
        if(err.code === 'ECONNREFUSED') {
            console.error('La conexion con la base de datos fue rechazada')
        }
    }
    if (conn) conn.release();
    console.log('Db Conected on Clever-Cloud');
    return;
});

pool.query = promisify(pool.query);

module.exports = pool;