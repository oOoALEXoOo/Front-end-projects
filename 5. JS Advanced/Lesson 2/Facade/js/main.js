class Task {
  constructor(data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.isCompleted = data.isCompleted;
  }
}

const TaskService = (function service() {
  function complete(task) {
    task.isCompleted = true;
    console.log(`completing task ${task.name}`);
  }

  function setCompletedDate(task) {
    task.completedDate = new Date();
    console.log(`${task.name} completed on ${task.completedDate}`);
  }

  function notify(task, user) {
    console.log(`Notifying ${user} of the completion of ${task.name}`);
  }

  function save(task) {
    console.log(`Saving task: ${task.name}`);
  }

  return {
    complete,
    setCompletedDate,
    notify,
    save,
  };
}());

const myTask = new Task({
  name: 'My Task',
  priority: 1,
  project: 'MyApp',
  user: 'Peter',
  isCompleted: false,
});

const TaskServiceWrapper = (function facade() {
  function completeAndNotify() {
    TaskService.complete(myTask);
    if (myTask.isCompleted) {
      TaskService.setCompletedDate(myTask);
      TaskService.notify(myTask, myTask.user);
      TaskService.save(myTask);
    }
  }

  return {
    completeAndNotify,
  };
}());

TaskServiceWrapper.completeAndNotify();

console.log(myTask);
