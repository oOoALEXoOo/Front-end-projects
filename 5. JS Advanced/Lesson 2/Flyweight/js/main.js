class Flyweight {
  constructor(priority, project, user, isCompleted) {
    this.priority = priority;
    this.project = project;
    this.user = user;
    this.isCompleted = isCompleted;
  }
}

const FlyweightFactory = (function factory() {
  const flyweights = {};

  function get(priority, project, user, isCompleted) {
    if (!flyweights[priority + project + user + isCompleted]) {
      flyweights[priority + project + user + isCompleted] = new Flyweight(
        priority, project, user, isCompleted,
      );
    }
    return flyweights[priority + project + user + isCompleted];
  }

  function getCount() {
    return Object.keys(flyweights).length;
  }

  return {
    get,
    getCount,
  };
}());

class Task {
  constructor(data) {
    this.name = data.name;
    this.flyweight = FlyweightFactory.get(data.priority, data.project, data.user, data.isCompleted);
    // this.priority = data.priority;
    // this.project = data.project;
    // this.user = data.user;
    // this.isCompleted = data.isCompleted;
  }
}

const TaskCollectionService = (function service() {
  const tasks = {};
  let count = 0;

  function add(data) {
    tasks[data.name] = new Task(data);
    count += 1;
  }

  function getTask(name) {
    return tasks[name];
  }

  function getCount() {
    return count;
  }

  return {
    add,
    getTask,
    getCount,
  };
}());

const projects = ['none', 'myApp', 'Test', 'AwesomeApp'];
const priorities = [1, 2, 3, 4, 5];
const users = ['John', 'Bran', 'Sansa', 'Aria'];
const completed = [true, false];

const initialMemory = process.memoryUsage().heapUsed;

for (let i = 0; i < 1000000; i++) {
  TaskCollectionService.add({
    name: `Task ${i}`,
    priority: priorities[Math.floor(Math.random() * 5)],
    project: projects[Math.floor(Math.random() * 4)],
    user: users[Math.floor(Math.random() * 4)],
    isCompleted: completed[Math.floor(Math.random() * 2)],
  });
}

const afterMemory = process.memoryUsage().heapUsed;

console.log(`used memory ${(afterMemory - initialMemory) / 1000000}`);
console.log(`tasks ${TaskCollectionService.getCount()}`);
console.log(`tasks ${FlyweightFactory.getCount()}`);
