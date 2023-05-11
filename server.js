const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "process.env.PASSWORD",
  database: "employeeInfo_db",
});

function viewAllDepartments() {
  connection.query(
    `SELECT * FROM department ORDER by department_id ASC;`,
    (err, res) => {
      if (err) throw err;
      console.table(rows);
      appStart();
    }
  );
}

function viewAllRoles() {
  connection.query(``, (err, res) => {
    if (err) throw err;
    console.table(rows);
    appStart();
  });
}

function viewAllEmployees() {
  connection.query(``, (err, res) => {
    if (err) throw err;
    console.table(rows);
    appStart();
  });
}

function addADepartment() {
  connection.query(``, (err, res) => {
    if (err) throw err;
    console.table(rows);
    appStart();
  });
}

function addARole() {
  connection.query(``, (err, res) => {
    if (err) throw err;
    console.table(rows);
    appStart();
  });
}

function addAnEmployee() {
  connection.query(``, (err, res) => {
    if (err) throw err;
    console.table(rows);
    appStart();
  });
}

appStart = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "initialChoice",
        message: "PLease select what operation you would like to do.",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
        ],
      },
    ])
    .then((choice) => {
      switch (choice.initialChoice) {
        case "View all departments":
          viewAllDepartments();
          break;

        case "View all roles":
          viewAllRoles();
          break;

        case "View all employees":
          viewAllEmployees();
          break;

        case "Add a department":
          addADepartment();
          break;

        case "Add a role":
          addARole();
          break;

        case "Add an employee":
          addAnEmployee();
          break;
      }
    });
};
