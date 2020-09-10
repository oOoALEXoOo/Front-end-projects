function show(data) {
    console.log(data);
}

//1
// let user = new Object();
// user.name = 'ПИЛИП';
// show(user);
// user.surname = 'ШЕВЧЕНКО';
// show(user);
// user.name = 'СЕРГІЙ';
// show(user);
// delete user['name'];
// show(user);


//2
let EmployeeSalaries = new Object();
let amountEmployees = +prompt('How many Employees?');
let salaryOfAllEmployees = 0;
for (let employee = 0; employee < amountEmployees; ) {
    EmployeeSalaries['salaryEmployee' + ++employee] = +prompt(`What salary does Employee ${employee} have?`);
}
for (let key in EmployeeSalaries) {
    salaryOfAllEmployees += EmployeeSalaries[key];
}
show(`Salary of all employees: ${salaryOfAllEmployees}$`);