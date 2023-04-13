const inquirer = require('inquirer')
const mysql = require('mysql2')
const cTable = require('console.table')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employeeInfo_db'
})

inquirer.prompt([
    {
        type: 'list',
        name: 'initialChoice',
        message: 'PLease select what operation you would like to do.',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 

        ]
    }
]) .then((response) => {
    switch (response.initialChoice) {
        case 'View all departments':
            break;

        case 'View all roles':
            break;

        case 'View all employees':
            break;

        case 'Add a department':
            break;

        case 'Add a role':
            break;
            
        case 'Add an employee':
            break;
    }

})