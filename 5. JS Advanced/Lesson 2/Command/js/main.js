const repo = {
  tasks: {},
  commands: [],

  getTask(id) {
    console.log(`Getting task ${id}`);
    return this.tasks[id];
  },

  save(task) {
    this.tasks[task.id] = task;
    console.log(`Saving ${task.name} to the db`);
  },

  execute(name, ...commandArgs) {
    this.commands.push({
      name,
      obj: commandArgs[0],
    });

    if (this[name]) {
      return this[name](...commandArgs);
    }
    return false;
  },

  executeNoLog(name, ...commandArgs) {
    if (this[name]) {
      return this[name](...commandArgs);
    }
    return false;
  },

  replay() {
    this.commands.forEach((commandObj) => {
      this.executeNoLog(commandObj.name, commandObj.obj);
    });
  },
};

for (let i = 0; i < 4; i++) {
  repo.execute('save', {
    id: i + 1,
    name: `Task ${i + 1}`,
    isCompleted: false,
  });
}

console.log(repo.tasks);

repo.tasks = {};

console.log(repo.commands, 'commands');
console.log(repo.tasks);

repo.replay();
console.log(repo.tasks);
