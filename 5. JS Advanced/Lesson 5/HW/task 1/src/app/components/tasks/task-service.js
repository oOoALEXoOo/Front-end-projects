const mysql = require('mysql');

const config = require('../../../..');

const Tasks = mysql.createConnection({
  host: config.mysql.host,
  port: config.mysql.port,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database
});

Tasks.connect((error) => {
  if (error) {
    throw error;
  }
});


const getAllTasks = () => {
  const sql = 'select * from tasks';

  return new Promise((resolve, reject) => {
    Tasks.query(sql, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
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
  const sql = 'insert into tasks set ?';

  return new Promise((resolve, reject) => {
    Tasks.query(sql, task, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

const updateTask = (taskId, task) => {
  const { text, description, isDone } = task;
  const updatedTask = { text, description, isDone };
  let updateText = `text = '${updatedTask.text}',`;
  let updateDecs = `description = '${updatedTask.description}',`;
  let updateDone = `isDone = ${updatedTask.isDone}`;

  for (const prop in updatedTask) {
    if (updatedTask[prop] === undefined) {
      delete updatedTask[prop];
    }
  }

  (typeof text === 'undefined') && (updateText = '');
  (typeof description === 'undefined') && (updateDecs = '');
  (typeof isDone === 'undefined') && (updateDone = '');

  let sql = `update tasks set
                 ${updateText}
                 ${updateDecs}
                 ${updateDone}
             where id = ${parseInt(taskId)}`;

  sql = sql.replace(/\s(?![\w=])/g, '');
  sql = sql.replace(/,(?=\swhere)/i, '');

  return new Promise((resolve, reject) => {
    Tasks.query(sql, task, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

const removeTask = (taskId) => {
  const sql = `delete from tasks where id = ${parseInt(taskId)}`;
  return new Promise((resolve, reject) => {
    Tasks.query(sql, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  removeTask,
};
