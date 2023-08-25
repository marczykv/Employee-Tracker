const inquirer = require('inquirer');
const queries = require('./queries');  
// prompts user with questions 
const start = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit'
            ]
        }
    ])
    .then((answer) => {
        switch (answer.action) {
            case 'View all departments':
                queries.viewAllDepartments()
                    .then(() => {
                        start();
                    });
                break;

            case 'View all roles':
                queries.viewAllRoles()
                    .then(() => {
                        start();
                    });
                break;

            case 'View all employees':
                queries.viewAllEmployees()
                    .then(() => {
                        start();
                    });
                break;

            case 'Add a department':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'departmentName',
                        message: 'Enter the name of the department:',
                        validate: input => input ? true : 'This field cannot be left blank!'
                    }
                ])
                .then(answer => queries.addDepartment(answer.departmentName))
                .then(() => {
                    start();
                });
                break;

            case 'Add a role':
                inquirer.prompt([
                    // ... (same prompts for this case)
                ])
                .then(answer => queries.addRole(answer.title, answer.salary, answer.departmentId))
                .then(() => {
                    start();
                });
                break;

            case 'Add an employee':
                inquirer.prompt([
                    // ... (same prompts for this case)
                ])
                .then(answer => queries.addEmployee(answer.firstName, answer.lastName, answer.roleId, answer.managerId || null))
                .then(() => {
                    start();
                });
                break;

            case 'Update an employee role':
                inquirer.prompt([
                    // ... (same prompts for this case)
                ])
                .then(answer => queries.updateEmployeeRole(answer.employeeId, answer.newRoleId))
                .then(() => {
                    start();
                });
                break;

            case 'Exit':
                console.log('Goodbye!');
                process.exit();

            default:
                console.log(`Action not handled: ${answer.action}`);
                start();
        }
    })
    .catch(error => {
        console.error('Error:', error);
        start();
    });
};
// return to start menu 
start();
