const employees = [
    {
        id: 1,
        name: 'Ali',
        position: 'Frontend Developer',
        active: true
    },
    {
        id: 2,
        name: 'Sarah',
        position: 'UI Designer',
        active: false
    },
    { 
        id: 3, 
        name: 'John', 
        position: 'Backend Developer', 
        active: true 
    }
];

// 1. Display all employees
console.log('--- All Employees ---');
employees.map(emp => {      // ${variable} is to incorporate into string without using lots of +, map is to loop thrugh all array
    console.log(`#${emp.id}: ${emp.name} - ${emp.position} (Active: ${emp.active})`);
});

// 2. Find employee by id
const findEmployeeById = (id) => employees.find(emp => emp.id === id);  //use arrow function
console.log('\n--- Find Employee with ID 2 ---');
console.log(findEmployeeById(2));

// 3. Filter active employees using filter()
const activeEmployees = employees.filter(emp => emp.active);
console.log('\n--- Active Employees ---');
console.log(activeEmployees);

// 4. Add a new employee using push()
const addEmployee = (newEmp) => {
    employees.push(newEmp);
};
addEmployee({ id: 4, name: 'Aisha', position: 'DevOps Engineer', active: true });
console.log('\n--- After Adding Aisha ---');
console.log(employees);

// 5. Remove an employee by ID using filter()
const removeEmployee = (id) => {
    const index = employees.findIndex(emp => emp.id === id);    //find index of the employee with the same id
    if (index !== -1) {
    employees.splice(index, 1);
    }
};
removeEmployee(2); // Removes Sarah (ID 2)
console.log('\n--- After Removing ID 2 ---');
console.log(employees);

// 6. Change an employee's active status using find()
const toggleStatus = (id) => {
    const emp = employees.find(e => e.id === id);
    if (emp) {
    emp.active = !emp.active;
    }
};
toggleStatus(1); // Changes Ali's status from true to false
console.log('\n--- After Changing Status for ID 1 ---');
console.log(employees);