const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const CFonts = require('cfonts');

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

    CFonts.say('Employee|Tracker!', {
        font: 'block',              // define the font face
        align: 'left',              // define text alignment
        colors: ['system'],         // define all colors
        background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
        letterSpacing: 1,           // define letter spacing
        lineHeight: 1,              // define the line height
        space: true,                // define if the output text should have empty lines on top and on the bottom
        maxLength: '0',             // define how many character can be on one line
    });
    
    //TODO: add startup function
});

