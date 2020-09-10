const getCurrencyRates = require('../../shared/currency-rates/currency-rates');

const convert = async (req, res) => {
  const ccyRates = await getCurrencyRates();
  const amount = req.params['amount'];
  const currency = req.params['ccy'];
  const converter = new Map();
  const convertedCcy = [];
  [USD, EUR, RUR] = ccyRates.map(obj => {
    if (obj['base_ccy'] === 'UAH') return obj['buy'];
  });

  switch (currency) {
    case 'UAH': case 'uah':
      converter.set('USD', amount / USD);
      converter.set('EUR', amount / EUR);
      converter.set('RUR', amount / RUR);
      break;

    case 'USD': case 'usd':
      converter.set('UAH', amount * USD);
      converter.set('EUR', amount * (USD / EUR));
      converter.set('RUR', amount * (USD / RUR));
      break;

    case 'EUR': case 'eur':
      converter.set('UAH', amount * EUR);
      converter.set('USD', amount * (EUR / USD));
      converter.set('RUR', amount * (EUR / RUR));
      break;

    case 'RUR': case 'rur':
      converter.set('UAH', amount * RUR);
      converter.set('USD', amount * (RUR / USD));
      converter.set('EUR', amount * (RUR / EUR));
      break;
  }

  converter.forEach((value, key) => {
    value = Math.round((value + Number.EPSILON) * 1000) / 1000;
    convertedCcy.push({ [amount + ' ' + currency.toUpperCase()]: value + ' ' + key });
  });

  res.status(200).send(convertedCcy);
};

module.exports = convert;
