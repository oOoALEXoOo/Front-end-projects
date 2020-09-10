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

const task = new Task('Some task');
task.complete();
task.save();

class UrgentTask extends Task {
  constructor(name, priority) {
    super(name);
    this.priority = priority;
  }

  notify() {
    console.log(`${this.name} - notifying important people`);
  }

  save() {
    this.notify();
    console.log('Special stuff before saving');
    super.save();
  }
}

const ut = new UrgentTask('Important task', 1);
ut.complete();
ut.save();
