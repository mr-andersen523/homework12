USE employee_DB;

-- Departments --
INSERT INTO department (name)
VALUES 
("Sales"), 
("Engineering"), 
("Finance"), 
("Legal"), 
("Human Resources"), 
("Marketing");

-- Roles --

INSERT INTO role (title, salary, department_id)
VALUES 
("Salesperson", 35000, 1), 
("Sales Manager", 45000, 1), 
("Human Resources Consultant", 80000, 5), 
("Human Resources Manager", 140000, 5),
("Lawyer", 125000, 4),
("Legal Team Lead", 175000, 4), 
("IT Technician", 52000, 2), 
("IT Manager", 90000, 2), 
("Accountant", 65000, 3);


-- Employees --
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Michael", "Scott", 2, null), 
("Pam", "Beasley", 1, 2), 
("Stanley", "Hudson", 3, 2), 
("Toby", "Flenderson", 5, null);







