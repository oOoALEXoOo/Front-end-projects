function show(data) {
    console.log(data);
}

class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    setToMap(map) {
        map.set(this.#name, this.#age);
    }

    static showPersons(map) {
        for (let person of map) {
            show(`name: ${person[0]}, age: ${person[1]}`);
        }
    }
}

let generator = generatorPerson(5);

let alex = generatePerson("Alex", 25);
let jessy = generatePerson("Jessy", 29);
let alice = generatePerson("Alice", 28);
let daniel = generatePerson("Daniel", 38);
let emily = generatePerson("Emily", 19);

let persons = new Map();

alex.setToMap(persons);
jessy.setToMap(persons);
alice.setToMap(persons);
daniel.setToMap(persons);
emily.setToMap(persons);

Person.showPersons(persons);







function* generatorPerson(n) {
    let name, age;
    for (let i = 0; i < n; i++) {
        [name, age] = yield show(`generating ${i+1} person...`);
        yield new Person(name, age);
    }
}

function generatePerson(name, age) {
    generator.next();
    return generator.next([name, age]).value;
}