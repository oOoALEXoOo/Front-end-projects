const express = require('express');
const bodyParser = require('body-parser');

const routing = require('./app/routes');
const config = require('./config/app');

const app = express();

app.use(config.accessControlAllowOrigin);
app.use(bodyParser.json());
app.use('/api', routing());

const { appPort } = config;

app.listen(appPort, () => console.log(`Listen on port ${appPort}`));
