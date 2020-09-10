class Task {
  constructor(data) {
    this.name = data.name;
    this.user = data.user;
    this.project = data.project;
    this.priority = data.priority;
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

const mediator = (function mediator() {
  const channels = {};

  function subscribe(channel, context, func) {
    if (!channels[channel]) {
      channels[channel] = [];
    }

    channels[channel].push({
      context,
      func,
    });
  }

  function publish(channel, ...restArgs) {
    if (!channels[channel]) {
      return;
    }

    channels[channel].forEach((channelObj) => {
      channelObj.func.apply(channelObj.context, restArgs);
    });
  }

  return {
    subscribe,
    publish,
  };
}());

const myTask = new Task({
  name: 'Some special task',
  user: 'John',
  project: 'MyApp',
  priority: 1,
  isCompleted: false,
});

mediator.subscribe('complete', NotificationService, NotificationService.update);
mediator.subscribe('complete', LoggingService, LoggingService.update);
mediator.subscribe('complete', AuditingService, AuditingService.update);

myTask.complete = function completeDecorator() {
  mediator.publish('complete', this);
  Task.prototype.complete.call(this);
};

myTask.complete();
