const express = require('express');
const mysql = require('mysql');
require('./app/components/shared/models');
const bodyParser = require('body-parser');

const routing = require('./app/routes');
const config = require('./config/app');

const app = express();

app.use(bodyParser.json());
app.use('/api', routing());

const { appPort } = config;

const db = mysql.createConnection({
  host: config.mysql.host,
  port: config.mysql.port,
  user: config.mysql.user,
  password: config.mysql.password
});

db.connect((error) => {
  if (error) {
    throw error;
  }
  app.listen(appPort, () => console.log(`Listen on port ${appPort}`));
  console.log('MySQL is connected...');
});
