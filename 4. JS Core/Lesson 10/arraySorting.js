function show(data) {
    console.log(data)
}

let array = [];

array.push({
    name: "Ivan",
    age: 22
});
array.push({
    name: "John",
    age: 13
});
array.push({
    name: "Zorro",
    age: 3
});
array.push({
    name: "Alla",
    age: 65
});

function sortByAge(obj1, obj2) {
    return obj1.age - obj2.age;
}

array.forEach(show);
show('\n');

//sort by age
array.sort(sortByAge);
show(array);

//sort by name
array.sort((obj1, obj2) => {
    if (obj1.name < obj2.name) return -1;
    if (obj1.name > obj2.name) return 1;
    return 0;
});
show(array);