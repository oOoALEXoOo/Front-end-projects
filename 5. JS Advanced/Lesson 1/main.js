function repeatAboutObjects() {
    const task = {
        title: 'some title',
        description: 'some description'
    };

    Object.defineProperty(task, 'toString', {
        value: function () {
            return `${this.title} ${this.description}`;
        },
        writable: false,
        enumerable: false,
        configurable: true
    });

    task.toString = 'Hi';

    console.log(task.toString());
    console.log(Object.keys(task));

    const urgentTask = Object.create(task);

    Object.defineProperty(urgentTask, 'toString', {
        value: function () {
            return `${this.title} is urgent!`;
        },
        writable: false,
        enumerable: false,
        configurable: true
    });

    console.log(urgentTask.toString());
}

function repeatPrototype() {// const Task = function (name) {
//     this.name = name;
//     this.isCompleted = false;
// };
//
// Task.prototype.complete = function () {
//     console.log(`Completing task ${this.name}`);
//     this.isCompleted = true;
// };
//
// Task.prototype.save = function () {
//     console.log(`Saving task ${this.name}`);
// };
//
// const task1 = new Task('create Task for constructors');
// const task2 = new Task('create Task for modules');
// const task3 = new Task('create Task for singletons');
//
// task1.complete();
// task2.save();
// task3.save();
}

class Task {
    constructor(name) {
        this.name = name;
        this.isCompleted = false;
    }

    complete() {
        console.log(`Completing task ${this.name}`);
        this.isCompleted = true;
    }

    save() {
        console.log(`Saving task ${this.name}`);
    }
}

// Module Pattern

const task = (function () {
    const db = [];
    
    function get(id) {
        if (db.length && (id >= 0 && id < db.length)) {
            console.log(`Getting task ${id}`);
            return db[id];
        }
    }

    function create(taskName) {
        if (taskName) {
            const task = new Task(taskName);
            console.log(`Creating and Saving ${task.name} to the db`);
            db.push(task);
            return task;
        }
    }

    return {
        get: get,
        create: create
    };
})();

const user = (function () {
    const db = [
        {name: 'John Snow'}
    ];

    function get(id) {
        if (db.length && (id >= 0 && id < db.length)) {
            console.log(`Getting user ${id}`);
            return db[id];
        }
    }

    return {
        get: get
    };
})();

const collection = (function () {
    const db = [
        {name: 'Collection Data'}
    ];

    function get(id) {
        if (db.length && (id >= 0 && id < db.length)) {
            console.log(`Getting collection ${id}`);
            return db[id];
        }
    }

    return {
        get: get
    };
})();

task.create('First task');
console.log(task.get(0).name);


// Factory Pattern

const repoFactory = (function () {
    let repositories;
    const repoList = [
        { name: 'task', source: task },
        { name: 'user', source: user },
        { name: 'collection', source: collection },
    ];

    repositories = repoList.map(repo => {
        return {
            [repo.name]: repo.source
        }
    });

    return repositories;
})();

const task1 = repoFactory[0]['task'].create('First task');
task1.user = repoFactory[1]['user'].get(0);
task1.collection = repoFactory[2]['collection'].get(0);

console.log(task1);

// Singleton Pattern (singleton.js)
