const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const connectionProperties = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Ca523187!",
    database: "employees_DB"
}

const connection = mysql.createConnection(connectionProperties);

connection.connect((err) => {
    if (err) throw err;

    console.log("\n WELCOME TO EMPLOYEE TRACKER \n");
    
});