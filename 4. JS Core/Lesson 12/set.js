function show(data) {
    console.log(data);
}

let alex = {name: 'Alex'};
let jessy = {name: 'Jessy'};
let alice = {name: 'Alice'};

let set = new Set();

//1. add to collection
set.add(alex);
set.add(alex);
set.add(jessy);
set.add(alice);
set.add(jessy);
set.add(alice);
set.add(alice);

//2. show collection
show(set);
set.forEach(obj => show(obj));
show('\n');

//3. delete element from collection
set.delete(alice);
set.forEach(obj => show(obj));

//4. check is object in collection
show(set.has(alice));

//5. show collection size
show(set.size);

let setKeys = set.keys();

for (let key of setKeys) {
    show(key);
}
show('\n');
let setValues = set.values();

for (let value of setValues) {
    show(value);
}

let setEntries = set.entries();

for (let entry of setEntries) {
    show(entry);
}

set.clear();
show(set.size);












