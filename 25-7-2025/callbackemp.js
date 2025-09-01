let employees = [
    {
        employeename: 'John',
        age: 30,
        salary: 50000},
    {
        employeename: 'rudra',
        age: 28,
        salary: 60000},
    {        employeename: 'lucky',
        age: 25, 
        salary: 45000
    },
    {        employeename: 'Aryan',
        age: 27,
        salary: 55000
    },  
    {        employeename: 'aadesh',
        age: 29,
        salary: 65000
    }
]
let newemployee = {
    employeename: 'Sumit',
    age: 32,
    salary: 70000
}
console.log("employees");
console.log(employees);

function addEmployee(newemployee, callback) {
    setTimeout(() => {
        console.log("Adding new employee...");
        employees.push(newemployee);
        callback();
        console.log("New employee added successfully");
    }, 5000);
}
console.log("after adding new employee");
function showEmployees() {
    console.log(employees);
}
addEmployee(newemployee, () => {
    console.log(employees);
});