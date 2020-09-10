const Router = require('express').Router;
const routing = Router();

const converter = require('./converter-route');

module.exports = () => {
  routing.use('/converter', converter());

  return routing;
}