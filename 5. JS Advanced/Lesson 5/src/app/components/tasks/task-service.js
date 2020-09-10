const mongoose = require('mongoose');

const Task = mongoose.model('Task');

const getAllTasks = () => {
  return Task.find().exec();
};

const taskValidation = (newTask) => {
  const { text, description } = newTask;
  const task = { text, description, isDone: false };
  for (const prop in task) {
    if (task.hasOwnProperty(prop) && task[prop] === undefined) {
      return false;
    }
  }
  return task;
};

const createTask = (newTask) => {
  const task = taskValidation(newTask);
  if (!task) {
    return Promise.reject();
  }
  return Task.create(task);
};

const updateTask = (taskId, task) => {
  const { text, description, isDone } = task;
  const updatedTask = { text, description, isDone };
  for (const prop in updatedTask) {
    if (updatedTask[prop] === undefined) {
      delete updatedTask[prop];
    }
  }
  return Task.findOneAndUpdate({ id: parseInt(taskId), updatedTask }).exec();
};

const removeTask = (taskId) => {
  return Task.deleteOne({ id: parseInt(taskId) })
    .exec()
    .then((result) => {
      return result.n;
  });
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  removeTask,
};
