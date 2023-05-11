INSERT INTO departments (name)
VALUES
('Accounting'),
('Engineering'),
('Marketing'),
('IT')
;

INSERT INTO roles (title, salary, department_id)
VALUES
('Accountant', 90000, 1),
('Engineer', 100000, 2),
('Sales Rep', 70000, 3),
('Developer', 150000, 4)
;
SELECT * FROM roles;

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Mark', 'Kringle', 1, NULL)
('John', 'Jacobs', 2, NULL)
('Sherry', 'Cho', 3, NULL)
('Dade', 'Murphy', 4, NULL)
('Kate', 'Libey', 4, 1)
('Ceasar', 'Milano', 3, 2)
('Conrad', 'Wilkes', 2, 3)
('Michael', 'Roads', 1, 4)
;

SELECT * FROM employees;