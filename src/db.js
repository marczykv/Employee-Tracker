const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Subaru123!!!',  
    database: 'businessDB'
});

module.exports = connection;