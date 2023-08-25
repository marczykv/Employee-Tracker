USE businessDB;

-- Clear out old data
DELETE FROM employee;
DELETE FROM role;
DELETE FROM department;

-- Inserting departments
INSERT INTO department (name) 
VALUES 
('Sales'), 
('Engineering'), 
('Human Resources'), 
('Finance');

-- Inserting roles for departments
INSERT INTO role (title, salary, department_id) 
VALUES 
('Sales Executive', 70000.00, 1),
('Software Engineer', 90000.00, 2),
('Senior Software Engineer', 110000.00, 2),
('HR Manager', 68000.00, 3),
('HR Assistant', 48000.00, 3),
('Accountant', 65000.00, 4),
('Finance Manager', 78000.00, 4);


-- Inserting employees
INSERT INTO employee (first_name, last_name, role_id) 
VALUES 
('John', 'Doe', 1),   -- Sales Executive without manager
('Jane', 'Smith', 2), -- Software Engineer without manager
('Alice', 'Johnson', 4), -- HR Manager without manager
('Bob', 'Brown', 6);  -- Accountant without manager


-- inserting more employees and referencing previous employees as managers
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES 
('Eva', 'Green', 3, 2),  -- Senior Software Engineer 
('Mike', 'Tyson', 5, 3), -- HR Assistant reporting 
('Amy', 'Adams', 7, 4);  -- Finance Manager reporting 
