const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const CFonts = require('cfonts');

const connectionProperties = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Ca523187!",
    database: "employee_db"
}

const connection = mysql.createConnection(connectionProperties);

connection.connect((err) => {
    if (err) throw err;

    CFonts.say('Employee|Tracker', {
        font: 'block',              // define the font face
        align: 'left',              // define text alignment
        colors: ['system'],         // define all colors
        background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
        letterSpacing: 1,           // define letter spacing
        lineHeight: 1,              // define the line height
        space: true,                // define if the output text should have empty lines on top and on the bottom
        maxLength: '0',             // define how many character can be on one line
    });

    console.log("Welcome to the Employee Tracker Application!" + "\n");

    mainMenu();
    
});

function mainMenu() {

    // QUESTIONS
    inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View all roles",
        "View all departments",
        "Add employee",
        "Add role",
        "Add department",
        "Update employee role",
        "Update employee manager",
        "Delete employee",
        "Delete role",
        "Delete department",
        "EXIT",
      ]
    })
    .then(function (answer) {

        // case switch
        switch (answer.action) {

            case "View all employees":
                viewAllEmp();
                break;

            case "View all roles":
                viewAllRoles();
                break;
            case "View all departments":
                viewAllDept();
                break;

            /////////////////
            case "Add employee":
                addEmp();
                break;
            case "Add department":
                addDept();
                break;
            case "Add role":
                addRole();
                break;
            ///////////////

            case "Update employee role":
                updateEmpRole();
                break;
            case "Update employee manager":
                updateEmpMngr();
                break;
            ///////////////

            case "Delete employee":
                deleteEmp();
                break;
            case "Delete role":
                deleteRole();
                break;
            case "Delete department":
                deleteDept();
                break;
        }
    });
}

///////////////////////////QUERIES/////////////////////////////////////////

/////   VIEW ///////

function viewAllEmp() {
    var query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
        if(err) return err;
        console.log("\n");

        // Display query results
        console.table(res);

        //Back to main menu
        mainMenu();
    });
};

function viewAllRoles() {
    var query = "SELECT * FROM employee_db.role";
    connection.query(query, function(err, res) {
        if(err) return err;
        console.log("\n");

        // Display query results
        console.table(res);

        mainMenu();
    });
};

function viewAllDept() {
    var query = "SELECT * FROM employee_db.department;";
    connection.query(query, function(err, res) {
        if(err) return err;
        console.log("\n");

        // Display query results 
        console.table(res);

        mainMenu();
    });
};


////// ADD ///////




