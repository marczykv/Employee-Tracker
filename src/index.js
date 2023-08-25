const inquirer = require('inquirer');
const queries = require('./queries');
// begins prompts for user input 
const promptUser = () => {
    return inquirer.prompt([
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
    .then(answer => {
        switch (answer.action) {
            case 'View all departments':
                return queries.viewAllDepartments();
            case 'View all roles':
                return queries.viewAllRoles();
            case 'View all employees':
                return queries.viewAllEmployees();
            case 'Add a department':
                
                break;
            case 'Add a role':
                
                break;
            case 'Add an employee':
                
                break;
            case 'Update an employee role':
                
                break;
            case 'Exit':
                process.exit();
        }
    })
    .then(result => {
        if (result) {
            console.table(result[0]);
        }
        return promptUser();  // Loop back to the main menu
    });
};

promptUser();
