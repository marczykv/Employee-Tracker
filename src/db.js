const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'YOUR_PASSWORD',  // Make sure to replace with your MySQL password!
    database: 'businessDB'
});

module.exports = connection;