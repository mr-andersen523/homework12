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
            case "EXIT":
                exit();
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


////// ADD ////////////////

///ADD EMPLOYEE

function addEmp() {
    inquirer
      .prompt([
        {
        name: "firstName",
        type: "input",
        message: "Input employee's first name."
        },
        {
          name: "lastName",
          type: "input",
          message: "Input employee's last name."
        },
        {
          name: "role_id",
          type: "input",
          message: "Input employee's role ID."
        },
        {
          name: "manager_id",
          type: "number",
          message: "Input the manager ID of the employee. ** Leave blank if none **"
        }
      ])

      .then(function(answer) {
        let manager_id = answer.manager_id;
        if (!answer.manager_id) {
          manager_id = null;
        };
        const query = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
        connection.query(query, [answer.firstName, answer.lastName, answer.role_id, manager_id], function(err, res) {
          console.log("You added a new employee!");

          mainMenu();
        });
      });
    }

//////// ADD ROLE

function addRole() {
    inquirer
      .prompt([
        {
        name: "role",
        type: "input",
        message: "Input name of new role/position."
        },
        {
          name: "salary",
          type: "input",
          message: "Input the salary for this role."
        },
        {
          name: "dpt_id",
          type: "input",
          message: "Input the department ID."
        }
      ])

      .then(function(answer) {
        const query = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
        connection.query(query, [answer.role, answer.salary, answer.dpt_id], function(err, res) {
          console.log("You added a new role!");

          mainMenu();
        });
      });
    }

    ///////// ADD DEPARTMENT

    function addDept() {
        inquirer
          .prompt([
            {
            name: "dpt",
            type: "input",
            message: "Input name of new department."
            }
          ])
    
          .then(function(answer) {
            const query = "INSERT INTO department (title, salary, department_id) VALUES (?)";
            connection.query(query, [answer.dpt], function(err, res) {
              console.log("You added a new department!");
    
              mainMenu();
            });
          });
        }

/////////////////////  UPDATE

///// UPDATE EMPLOYEE ROLE

function updateEmpRole() {
    inquirer
      .prompt([
        {
        name: "firstName",
        type: "input",
        message: "Input first name of employee."
        },
        {
          name: "lastName",
          type: "input",
          message: "Input last name of employee."
        },
        {
          name: "role",
          type: "number",
          message: "Input new ID number."
        }
      ])
      .then(function(answer) {
        var query = "UPDATE employee SET role_id=? WHERE (first_name=? AND last_name=?)";
        connection.query(query, [answer.firstName, answer.lastName, answer.role], function(err, res) {
          console.table("You updated the employee's role!");
          mainMenu();
          });
      });
  }


//// UPDATE EMPLOYEE MANAGER

function updateEmpMngr() {
    inquirer
      .prompt([
        {
        name: "firstName",
        type: "input",
        message: "Input first name of employee."
        },
        {
          name: "lastName",
          type: "input",
          message: "Input last name of employee."
        },
        {
          name: "manager_id",
          type: "number",
          message: "Input new manager id number of employee. ** Leave blank if none **"
        }
      ])
      .then(function(answer) {
        let manager_id = answer.manager_id;
        if (!answer.manager_id) {
          manager_id = null;
        };
        var query = "UPDATE employee SET manager_id=? WHERE (first_name=? AND last_name=?)";
        connection.query(query, [answer.firstName, answer.lastName, manager_id], function(err, res) {
          console.table("You updated the employee's manager number!");
          mainMenu();
          });
      });
  }


  //////////////////// DELETE

  //////// DELETE EMPLOYEE

  function deleteEmp() {
    inquirer
    .prompt([
      {
      name: "firstName",
      type: "input",
      message: "Input first name."
      },
      {
        name: "lastName",
        type: "input",
        message: "Input last name."
      }
    ])
    .then(function(answer) {
      var query = "DELETE FROM employee WHERE (first_name=? AND last_name=?)";
      connection.query(query, [answer.firstName, answer.lastName], function(err, res) {
        console.table("Employee TERMINATED!");
        mainMenu();
        });
    });
}

  //////// DELETE ROLE

  function deleteRole() {
    inquirer
    .prompt([
      {
      name: "role",
      type: "input",
      message: "Input role."
      }
    ])
    .then(function(answer) {
      var query = "DELETE FROM role WHERE (title=?)";
      connection.query(query, [answer.role], function(err, res) {
        console.table("Role DESTROYED!");
        mainMenu();
        });
    });
}

  //////// DELETE DEPARTMENT

  function deleteDept() {
    inquirer
    .prompt([
      {
      name: "dpt",
      type: "input",
      message: "Input department."
      }
    ])
    .then(function(answer) {
      var query = "DELETE FROM department WHERE (name=?)";
      connection.query(query, [answer.dpt], function(err, res) {
        console.table("Department DOWNSIZED!");
        mainMenu();
        });
    });
}

////////////////////////////////////////////////////
////// EXIT FROM APP

function exit() {
    console.log("Logged off");
    connection.end();
  }
