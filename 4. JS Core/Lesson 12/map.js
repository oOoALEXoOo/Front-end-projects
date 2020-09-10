function show(data) {
    console.log(data);
}

let map = new Map([
    ['apple', {name: 'apple', weight: 230}]
]);

let alex = {name: 'Alex'};

map.set(1, {name: 'number', weight: 1});
map.set(alex, {age: 30});

// show(map);

let mapKeys = map.keys();
let mapValues = map.values();
let mapEntries = map.entries();

//1. keyMap
for (let mapKey of mapKeys) {
    show(mapKey);
}
show('\n');
//2. valuesMap
for (let mapValue of mapValues) {
    show(mapValue);
}
show('\n');
//3. entriesMap
for (let mapEntry of mapEntries) {
    show(mapEntry);
}

//4. get from map
show(map.get('apple'));

//5. delete from map
show(map.delete(alex));

mapEntries = map.entries();
for (let mapEntry of mapEntries) {
    show(mapEntry);
}

//6. clear map
map.clear();

//7. get map size
show(map.size);















