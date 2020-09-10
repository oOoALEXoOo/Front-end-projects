const express = require('express');
const mongoose = require('mongoose');
require('./app/components/shared/models');
const bodyParser = require('body-parser');

const routing = require('./app/routes');
const config = require('./config/app');

const app = express();

app.use(bodyParser.json());
app.use('/api', routing());

const { appPort, mongoUri } = config;

mongoose.connect(mongoUri)
.then(() => app.listen(
  appPort,
  () => console.log(`Listen on port ${appPort}`)
))
.catch((error) => console.log(`Error connecting to mongo: ${mongoUri}`, error));