const db = require('./db');

// Define and exports query functions 
const viewAllDepartments = () => {
    return db.promise().query('SELECT * FROM department');
};

// ... continue with other queries 

module.exports = {
    viewAllDepartments,
    // ... export other queries 
};