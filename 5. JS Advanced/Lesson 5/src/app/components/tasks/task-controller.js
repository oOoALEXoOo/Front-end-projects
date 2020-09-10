const taskService = require('./task-service');

const getAllTasks = (req, res) => {
  return taskService.getAllTasks()
    .then((tasks) => {
      const result = tasks.map((task) => {
        const { id, text, description, isDone } = task;
        return { id, text, description, isDone };
      });
      return res.status(200).json(result);
  })
    .catch((error) => res.status(500).json(error));
};

const createTask = (req, res) => {
  return taskService.createTask(req.body)
    .then((createdTask) => {
      const { id, text, description } = createdTask;
      const result = { id, text, description, isDone: false };
      return res.status(201).json(result);
  }, () => {
      return res.status(400).json({ message: 'Please, fill all required fields!' });
  })
    .catch((error) => res.status(500).json(error));
};

const updateTask = (req, res) => {
  return taskService.updateTask(req.params.id, req.body)
    .then((task) => {
      if (!task) {
        return res.status(404).json({ message: 'There is no such resource!' });
      }
      else {
        return res.status(200).json({ message: 'Updated successfully!' });
      }
  })
    .catch((error) => res.status(500).json(error));
};

const removeTask = (req, res) => {
  return taskService.removeTask(req.params.id)
    .then((isDeleted) => {
      if (isDeleted) {
        res.status(200).json({ success: true });
      } else {
        res.status(404).json({ message: 'There is no such resource!' });
      }
  })
    .catch((error) => res.status(500).json(error));
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  removeTask,
};
