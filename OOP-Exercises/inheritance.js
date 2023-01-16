//    OLD WAY !  Old way of coding




// 1. Create constructor functions with properties representing the following:
// ○ Person: name, surname
// ○ Employee: inherits Person and has job and salary
// ○ Developer: inherits from Employee and has specialization
// ○ Manager: inherits from Employee and has department

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.getFullName = function () {
    return this.name + " " + this.surname;
}

// Employee
function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// 4. All employees should inherit methods:
// ○ getData which returns the name, surname and salary
// ○ getSalary which prints out the salary
// ○ increaseSalary which increases the salary by 10%

Employee.prototype.getData = function () {
    return this.name + " " + this.surname + " " + this.salary;
}
Employee.prototype.getSalary = function () {
    console.log(this.salary);
}
Employee.prototype.increaseSalary = function () {
    this.salary += this.salary * 1.1;
}

//Dveloper  2. All developers should inherit method:
// ○ getSpecialization which prints out the name of the specialization

function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;
Developer.prototype.getSpecialization = function () {
    console.log(this.specialization);
}

// Manager

function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

// 3. All managers should inherit methods:
//  getDepartment which prints out the name of the department
//  changeDepartment which sets the department value to the given value

Manager.prototype.getDepartment = function () {
    console.log(this.department);


}

Manager.prototype.changeDepartment = function (newDepartment) {
    this.department = newDepartment;
}




//     NEW WAY ! The Way how it`s done now.

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName = function () {
        console.log(this.name + " " + this.surname);
    }
}

var person = new Person("Pera", "Peric");
// console.log(person);
// person.getFullName();


class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }

    getData = function () {
        return this.name + " " + this.surname + " " + this.salary;
    }

    getSalary = function () {
        console.log(this.salary);
    }

    increaseSalary = function () {
        return this.salary * 1.1;
    }
}

var employee = new Employee("Petar", "Petrovic", "programmer", 1200);
// console.log(employee);
// employee.getData();
// employee.getSalary();
// console.log(employee.increaseSalary());


class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }

    getSpecialization = function () {
        console.log(this.specialization);
    }
}

var developer = new Developer("Marija", "Todorovic", "Programmer", 1500, "Backend");
// console.log(developer);
// developer.getSpecialization();
// console.log(developer.increaseSalary());


class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;
    }

    getDepartment = function () {
        console.log(this.department);
    }

    changeDepartment = function (newDepartment) {
        this.department = newDepartment;
        console.log(this.department);
    }
}

var manager = new Manager("Milos", "Ostojic", "PR", 1000, "Marketing");
// console.log(manager);
// manager.getDepartment();
// manager.changeDepartment("HR");







