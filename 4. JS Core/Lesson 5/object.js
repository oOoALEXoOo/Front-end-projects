function show(data) {
    console.log(data);
}

let student = {
    firstName: 'Petro',
    lastName: 'Tesla',
    age: 22,
    startDate: new Date(),
    'nick name': 'autFun'
};

// show(student['nick name']);
// show(student.firstName);
// show(student['lastName']);

function deleteProperty(property, object) {
    delete object[property];
}

// show(student);
// deleteProperty('startDate', student);
// show(student);

function checkProperty(property, object) {
    show(`Does property ${property} exist in student: ${property in object}`);
}

// checkProperty('toString', student);
// show(student.hasOwnProperty('toString'));

for (let key in student) {
    // show(key);
}

for (let key in student) {
    // show(student[key]);
}

function checkClass(object) {
    show(Object.prototype.toString.call(object).slice(8, -1));
}

checkClass(student);
// checkClass('test');
// checkClass(54);
// checkClass(new Date());

let serializedStudent = JSON.stringify(student);
show(serializedStudent);
let deserializedStudent = JSON.parse(serializedStudent);
show(deserializedStudent);

