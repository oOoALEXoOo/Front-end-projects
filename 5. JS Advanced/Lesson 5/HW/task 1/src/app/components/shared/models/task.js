const mysql = require('mysql');

const config = require('../../../../..');

let sql;

const connection = mysql.createConnection({
  host: config.mysql.host,
  port: config.mysql.port,
  user: config.mysql.user,
  password: config.mysql.password,
  multipleStatements: config.mysql.multipleStatements
});

connection.connect((error) => {
  if (error) {
    throw error;
  }
});

sql = 'create database if not exists todoApp; use todoApp';

connection.query(sql, (err, result) => {
  if (err) {
    throw err;
  }
});

sql = 'create table if not exists tasks(id int not null primary key auto_increment, text varchar(255) not null, description varchar(255) not null, isDone boolean not null default false)';

connection.query(sql, (err, result) => {
  if (err) {
    throw err;
  }
});
