const db = require('./db');
// defines query functions 
const viewAllDepartments = () => {
    return db.promise().query('SELECT * FROM department');
};

const viewAllRoles = () => {
    return db.promise().query('SELECT * FROM role');
};

const viewAllEmployees = () => {
    return db.promise().query('SELECT * FROM employee');
};

const addDepartment = (name) => {
    return db.promise().query('INSERT INTO department (name) VALUES (?)', [name]);
};

const addRole = (title, salary, department_id) => {
    return db.promise().query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, department_id]);
};

const addEmployee = (firstName, lastName, roleId, managerId) => {
    return db.promise().query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId]);
};


module.exports = {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees,
    addDepartment,
    addRole,
    addEmployee
};
