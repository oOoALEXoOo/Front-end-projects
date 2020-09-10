function show(data) {
    console.log(data)
}

let students = [];
students.push({
    name: 'Alex',
    sex: 'male',
    age: 20
}, {
    name: 'Andrey',
    sex: 'male',
    age: 19
}, {
    name: 'John',
    sex: 'male',
    age: 22
}, {
    name: 'Alice',
    sex: 'female',
    age: 22
}, {
    name: 'Mike',
    sex: 'male',
    age: 18
});

let studentsInFirstThreeYears = students.filter(student => student.age < 21 && student.sex === 'male');
show(studentsInFirstThreeYears);

studentsInFirstThreeYears.map(student => student.yearsUnderAge = 21 - student.age);
show(studentsInFirstThreeYears);

students.sort((student1, student2) => {
    if (student1.age !== student2.age) {
        return student1.age - student2.age;
    }

    let student1Name = String(student1.name).toLowerCase();
    let student2Name = String(student2.name).toLowerCase();

    if (student1Name > student2Name) return 1;
    if (student1Name < student2Name) return -1;
    return 0;
});
show(students);