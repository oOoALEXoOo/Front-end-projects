const Router = require('express').Router;
const route = Router();

const converter = require('../components/converter/converter');

module.exports = () => {
  route.get('/:amount/:ccy', converter);

  return route;
}