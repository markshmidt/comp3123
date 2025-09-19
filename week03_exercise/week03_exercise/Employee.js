//TODO - Create Employee Module here and export to use in index.js

let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
]


// All employees 
function getAllEmployees() {
  return employees;
}

// Names
function getEmployeeNamesAsc() {
  return employees
    .map(e => `${e.firstName} ${e.lastName}`)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

// Total salary
function getTotalSalary() {
  return employees.reduce((sum, e) => sum + (Number(e.salary) || 0), 0);
}

module.exports = { getAllEmployees, getEmployeeNamesAsc, getTotalSalary };
