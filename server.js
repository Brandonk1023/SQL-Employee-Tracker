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
]) .then((choice) => {
    switch (choice.initialChoice) {
        case 'View all departments':
            viewAllDepartments()
            break

        case 'View all roles':
            viewAllRoles()
            break

        case 'View all employees':
            viewAllEmployees()
            break

        case 'Add a department':
            addADepartment()
            break

        case 'Add a role':
            addARole()
            break

        case 'Add an employee':
            addAnEmployee()
            break
    }

})