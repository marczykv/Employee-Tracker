const inquirer = require('inquirer');
const queries = require('./queries');

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
                    .then(([rows]) => {
                        console.table(rows);
                        start();
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        start();
                    });
                break;

            case 'View all roles':
                queries.viewAllRoles()
                    .then(([rows]) => {
                        console.table(rows);
                        start();
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        start();
                    });
                break;

            case 'View all employees':
                queries.viewAllEmployees()
                    .then(([rows]) => {
                        console.table(rows);
                        start();
                    })
                    .catch(error => {
                        console.error('Error:', error);
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
                    console.log('Department added successfully!');
                    start();
                })
                .catch(error => {
                    console.error('Error:', error);
                    start();
                });
                break;

            case 'Add a role':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'title',
                        message: 'Enter the title of the role:',
                        validate: input => input ? true : 'This field cannot be left blank!'
                    },
                    {
                        type: 'input',
                        name: 'salary',
                        message: 'Enter the salary for the role:',
                        validate: input => isNaN(input) ? 'Please enter a valid number for salary.' : true
                    },
                    {
                        type: 'list',
                        name: 'departmentId',
                        message: 'Select the department for the role:',
                        choices: ['1', '2', '3']
                    }
                ])
                .then(answer => queries.addRole(answer.title, answer.salary, answer.departmentId))
                .then(() => {
                    console.log('Role added successfully!');
                    start();
                })
                .catch(error => {
                    console.error('Error:', error);
                    start();
                });
                break;

            case 'Add an employee':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'firstName',
                        message: 'Enter the first name of the employee:',
                        validate: input => input ? true : 'This field cannot be left blank!'
                    },
                    {
                        type: 'input',
                        name: 'lastName',
                        message: 'Enter the last name of the employee:',
                        validate: input => input ? true : 'This field cannot be left blank!'
                    },
                    {
                        type: 'list',
                        name: 'roleId',
                        message: 'Select the role for the employee:',
                        choices: ['1', '2', '3']
                    },
                    {
                        type: 'input',
                        name: 'managerId',
                        message: 'Enter the manager ID for the employee (leave blank if none):',
                        default: ''
                    }
                ])
                .then(answer => queries.addEmployee(answer.firstName, answer.lastName, answer.roleId, answer.managerId || null))
                .then(() => {
                    console.log('Employee added successfully!');
                    start();
                })
                .catch(error => {
                    console.error('Error:', error);
                    start();
                });
                break;

            case 'Update an employee role':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'employeeId',
                        message: 'Enter the ID of the employee you wish to update:',
                        validate: input => input ? true : 'This field cannot be left blank!'
                    },
                    {
                        type: 'list',
                        name: 'newRoleId',
                        message: 'Select the new role for the employee:',
                        choices: ['1', '2', '3']
                    }
                ])
                .then(answer => queries.updateEmployeeRole(answer.employeeId, answer.newRoleId))
                .then(() => {
                    console.log('Employee role updated successfully!');
                    start();
                })
                .catch(error => {
                    console.error('Error:', error);
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

start();
