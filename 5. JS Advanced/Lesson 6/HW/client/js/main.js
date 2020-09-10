const converter = (function () {
  const amountInput = document.querySelector('input#amount');
  const currencyOption = document.querySelector('select#currency');
  const convertButton = document.querySelector('button#convert');

  function enable() {
    convertButton.addEventListener('click', convert);
    amountInput.addEventListener('input', removeErrorMessage);
  }

  function removeErrorMessage(event) {
    if (event.target.classList.contains('is-invalid')) {
      event.target.classList.remove('is-invalid');
    }
  }

  function isEmptyField(field) {
    const errorMessage = document.querySelector('div.invalid-feedback');

    if (!field.value) {
      field.classList.add('is-invalid');
      errorMessage.textContent = 'Please fill the amount!';
      field.focus();

      return false;
    }

    return true;
  }

  function isNumericField(field) {
    const numberReg = new RegExp('^\\d+(\\.\\d+)?$');
    const errorMessage = document.querySelector('div.invalid-feedback');

    if (!numberReg.test(field.value)) {
      field.classList.add('is-invalid');
      errorMessage.textContent = 'Amount field is not a number!';
      field.focus();

      return false;
    }

    return true;
  }

  function filterCurrency(currency) {
    let lastDigit = currency.search(/\d(?=(\.\d+)?\s*[A-Z]{3})/);

    currency = currency.split('');

    for (let i = lastDigit - 3; i >= 0; i -= 3) {
      currency[i] += ' ';
    }

    return currency.join('');
  }

  function createTable() {
    const table = document.createElement('table');

    table.classList.add('table', 'table-bordered', 'table-hover', 'mt-4');
    table.id = 'convertedCurrencies';

    return table;
  }

  function creatTableHeader(table) {
    const tHead = document.createElement('thead');
    const tr = document.createElement('tr');
    const initialCcyHeader = document.createElement('th');
    const convertedCcyHeader = document.createElement('th');

    tHead.classList.add('thead-light');

    initialCcyHeader.setAttribute('scope', 'col');
    convertedCcyHeader.setAttribute('scope', 'col');

    initialCcyHeader.textContent = 'Initial currency';
    convertedCcyHeader.textContent = 'Converted currency';

    tr.append(initialCcyHeader, convertedCcyHeader);
    tHead.append(tr);
    table.append(tHead);

    return table;
  }

  function createTableBody(table, convertedValues) {
    const tBody = document.createElement('tbody');

    for (let row = 0, pair = 0; row < 3; row++, pair++) {
      const tr = document.createElement('tr');
      const convertedPair = Object.entries(convertedValues[pair]);

      for (let currency = 0; currency < 2; currency++) {
        const td = document.createElement('td');
        const currencyValue = convertedPair[0][currency];
        td.textContent = filterCurrency(currencyValue);
        tr.append(td);
      }

      tBody.append(tr);
    }

    table.append(tBody);

    return table;
  }

  function convert() {
    if (!isEmptyField(amountInput)) return;
    if (!isNumericField(amountInput)) return;

    const amount = amountInput.value;
    const ccy = currencyOption.value;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://127.0.0.1:3000/api/converter/${amount}/${ccy}`);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send();

    xhr.onload = function() {
      const container = document.querySelector('div.container');
      let convertedValues = JSON.parse(xhr.response);
      let previousResults = document.querySelector('table#convertedCurrencies');
      let newResults;

      newResults = createTable();
      newResults = creatTableHeader(newResults);
      newResults = createTableBody(newResults, convertedValues);

      if (previousResults) {
        previousResults.replaceWith(newResults);
      } else {
        container.append(newResults);
      }
    }
  }

  return {
    enable,
  };
}());

converter.enable();
