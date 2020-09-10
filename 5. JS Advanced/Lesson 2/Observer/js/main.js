class Task {
  constructor(data) {
    this.name = data.name;
    this.user = data.user;
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

class ObserverList {
  constructor() {
    this.observerList = [];
  }

  add(obj) {
    return this.observerList.push(obj);
  }

  get(index) {
    if (index >= 0 && index < this.observerList.length) {
      return this.observerList[index];
    }
    return null;
  }

  removeAt(index) {
    this.observerList.splice(index, 1);
  }

  findIndex(obj, startIndex) {
    return this.observerList.indexOf(obj, startIndex);
  }

  getCount() {
    return this.observerList.length;
  }
}

class ObservableTask extends Task {
  constructor(data) {
    super(data);
    this.observers = new ObserverList();
  }

  addObserver(observer) {
    this.observers.add(observer);
  }

  removeObserver(observer) {
    this.observers.removeAt(this.observers.findIndex(observer, 0));
  }

  notify(context) {
    const observerCount = this.observers.getCount();

    for (let i = 0; i < observerCount; i++) {
      this.observers.get(i)(context);
    }
  }

  save() {
    this.notify(this);
    super.save();
  }
}

const NotificationService = (function notifying() {
  const message = 'Notifying';

  function update(task) {
    console.log(`${message} ${task.user} for task ${task.name}`);
  }

  return {
    update,
  };
}());

const LoggingService = (function logging() {
  const message = 'Logging';

  function update(task) {
    console.log(`${message} ${task.user} for task ${task.name}`);
  }

  return {
    update,
  };
}());

const AuditingService = (function auditing() {
  const message = 'Auditing';

  function update(task) {
    console.log(`${message} ${task.user} for task ${task.name}`);
  }

  return {
    update,
  };
}());

const task = new ObservableTask({
  name: 'My special task',
  user: 'John',
});

task.addObserver(NotificationService.update);
task.addObserver(LoggingService.update);
task.addObserver(AuditingService.update);

task.save();

task.removeObserver(AuditingService.update);

task.save();
