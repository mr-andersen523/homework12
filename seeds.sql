USE employees_DB;

-- Departments --
INSERT INTO department (id, name)
VALUES (1, "Sales");

INSERT INTO department (id, name)
VALUES (2, "Engineering");

INSERT INTO department (id, name)
VALUES (3, "Finance");

INSERT INTO department (id, name)
VALUES (4, "Legal");

INSERT INTO department (id, name)
VALUES (5, "Human Resources");

INSERT INTO department (id, name)
VALUES (6, "Marketing");

-- Roles --

-- 1 Sales
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Salesperson", 35000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Sales Lead", 45000, 1);

--2 Engineering
INSERT INTO role (id, title, salary, department_id)
VALUES (3, "Software Engineer", 52000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (4, "Lead Engineer", 65000, 2);

--3 Finances
INSERT INTO role (id, title, salary, department_id)
VALUES (5, "Accountant", 65000, 3);

--4 Legal
INSERT INTO role (id, title, salary, department_id)
VALUES (6, "Lawyer", 125000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (7, "Legal Team Lead", 175000, 4);

--5 HR
INSERT INTO role (id, title, salary, department_id)
VALUES (8, "Human Resources Director", 140000, 5);

INSERT INTO role (id, title, salary, department_id)
VALUES (9, "Human Resources Consultant", 80000, 5);

INSERT INTO role (id, title, salary, department_id)
VALUES (10, "Training and Development Manager", 80000, 5);


--6 Marketing
INSERT INTO role (id, title, salary, department_id)
VALUES (11, "Social Media Specialist", 50000, 6);

INSERT INTO role (id, title, salary, department_id)
VALUES (12, "Brand Manager", 90000, 6);

INSERT INTO role (id, title, salary, department_id)
VALUES (13, "Chief Marketing Officer", 170000, 6);


-- Employees --
INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Sean", "Combs", 1, null);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Marshall", "Mathers", 11, null);




