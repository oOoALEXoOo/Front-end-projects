function show(data) {
    console.log(data);
}

class Employee {
    constructor(name, age, qualificationLevel, workingHours) {
        this.name = name;
        this.age = age;
        this.qualificationLevel = qualificationLevel;
        this.workingHours = workingHours;
    }
    getInfoAbout() {
        return `name: ${this.name} \nage: ${this.age}\nqualificationLevel:` +
               ` ${this.qualificationLevel}\nworkingHours: ${this.workingHours}\n`;
    }
}

class EmployeeHourlyWage extends Employee{
    constructor(name, age, qualificationLevel, workingHours, hourlyWage) {
        super(name, age, qualificationLevel, workingHours);
        this.hourlyWage = hourlyWage;
    }
    getInfoAbout = () => super.getInfoAbout() + `hourlyWage: ${this.hourlyWage}`;
    getWageForYear = () => (365 - 104 - 16) * this.workingHours * this.hourlyWage;
    showWageForYear = () => show(this.getInfoAbout() + '\nWage for year = ' + this.getWageForYear() + '$');

}

class EmployeeMonthlyWage extends Employee{
    constructor(name, age, qualificationLevel, workingHours, monthlyWage) {
        super(name, age, qualificationLevel, workingHours);
        this.monthlyWage = monthlyWage;
    }
    getInfoAbout = () => super.getInfoAbout() + `monthlyWage: ${this.monthlyWage}`;
    getWageForYear = () => 12 * this.monthlyWage;
    showWageForYear = () => show(this.getInfoAbout() + '\nWage for year = ' + this.getWageForYear() + '$');
}


let employeeHourlyWage = new EmployeeHourlyWage('Alex', 30, 'Senior', 6, 15);
let employeeMonthlyWage = new EmployeeMonthlyWage('John', 25, 'Middle', 6, 950);

let employees = [employeeHourlyWage, employeeMonthlyWage];

employees.forEach((employee) => employee.showWageForYear());