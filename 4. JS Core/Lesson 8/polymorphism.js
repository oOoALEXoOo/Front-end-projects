function show(data) {
    console.log(data);
}

function Person(age, name) {
    this.age = age;
    let _name = name;

    this.getName = () => _name;
    this.setName = (name) => _name = name;
}

Person.prototype.getData = function () {
    show( 'Person(name = ' + this.getName() + ', age = ' + this.age + ')' );
}

function Student(yearOfStudying, universityName) {
    this.yearOfStudying = yearOfStudying;
    this.universityName = universityName;
}

Student.prototype = new Person();

Student.prototype.getData = function () {
    show( 'Student(name = ' + this.getName() + ', age = ' + this.age
            + ', yearOfStudying = ' + this.yearOfStudying
            + ', universityName = ' + this.universityName + ')' );
}

let student = new Student(3, 'Harvard');
student.setName("Edvard");
student.age = 22;
// student.getData();

let person = new Person(55, "John");
// person.getData();

let arrayOfPersons = [person, student];

arrayOfPersons.forEach(person => person.getData());
// for (let person in arrayOfPersons) {
//     arrayOfPersons[person].getData();
// }










