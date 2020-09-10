const axios = require('axios');

const getCurrencyRates = () => {
  return axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err;
    });
}

module.exports = getCurrencyRates;
