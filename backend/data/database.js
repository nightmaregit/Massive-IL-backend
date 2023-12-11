const mysql = require('mysql2')
const db  =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_perpustakaan',
    password: ''
})

module.exports = db