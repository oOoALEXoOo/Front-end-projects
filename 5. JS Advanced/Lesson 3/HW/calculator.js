const calculator = (function calculator() {
  const display = document.querySelector('#display');
  const lastAnswerKey = document.querySelector('#lastAnswerKey');
  const clearKey = document.querySelector('#clearKey');
  const equalsKey = document.querySelector('#equalsKey');
  const firstRowKeys = document.querySelector('.row.first');

  function enable() {
    for (let row = firstRowKeys; row; row = row.nextElementSibling) {
      for (let key = row.firstElementChild; key; key = key.nextElementSibling) {
        key.addEventListener('click', displayValue);
        if (/sin/i.test(key.textContent)) break;
      }
    }
    clearKey.addEventListener('click', clearDisplay);
    equalsKey.addEventListener('click', displayResult);
    lastAnswerKey.addEventListener('click', displayLastAnswer);
  }

  function disable() {
    for (let row = firstRowKeys; row; row = row.nextElementSibling) {
      for (let key = row.firstElementChild; key; key = key.nextElementSibling) {
        key.removeEventListener('click', displayValue);
        if (/sin/i.test(key.textContent)) break;
      }
    }
    clearKey.removeEventListener('click', clearDisplay);
    equalsKey.removeEventListener('click', displayResult);
    lastAnswerKey.removeEventListener('click', displayLastAnswer);
  }

  function displayValue(event) {
    display.value += event.target.textContent;
  }

  function clearDisplay() {
    display.value = '';
  }

  function displayResult() {
    display.value = calcMathExp(display.value);
    lastAnswerKey.dataset.lastAnswer = display.value;
  }

  function displayLastAnswer() {
    display.value += lastAnswerKey.dataset.lastAnswer || '';
  }

  function calcMathExp(mathExp) {
    let complexMathExp = '';
    const operand = '(-?\\d+(?:\\.\\d+)?)';
    const sqrtExp = new RegExp(`(√)${operand}`);
    const exponentExp = new RegExp(`${operand}(\\^)${operand}`);
    const trigonometricExp = new RegExp(`(sin|cos)${operand}`);
    const parenthesizedExp = new RegExp(`\\(${operand}\\s*([-+*/])\\s*${operand}\\)`);
    const mulDivExp = new RegExp(`${operand}\\s*([*/])\\s*${operand}`);
    const minPlusExp = new RegExp(`${operand}\\s*([-+])\\s*${operand}`);
    const resultNumber = new RegExp(`^${operand}$`);

    function simplify(mathExp) {
      if ((complexMathExp = findComplexParenthesizedExp(mathExp))) {
        mathExp = mathExp.replace(complexMathExp, (match) => calcMathExp(match.slice(1, -1)));
      } else if (sqrtExp.test(mathExp)) {
        mathExp = mathExp.replace(sqrtExp, (match, radix, number) => operation(+number, radix));
      } else if (exponentExp.test(mathExp)) {
        mathExp = mathExp.replace(exponentExp, (match, op1, exp, op2) => operation(+op1, exp, +op2));
      } else if (trigonometricExp.test(mathExp)) {
        mathExp = mathExp.replace(trigonometricExp, (match, trigFunc, number) => operation(+number, trigFunc));
      } else if (parenthesizedExp.test(mathExp)) {
        mathExp = mathExp.replace(parenthesizedExp, (match, op1, op, op2) => operation(+op1, op, +op2));
      } else if (mulDivExp.test(mathExp)) {
        mathExp = mathExp.replace(mulDivExp, (match, op1, op, op2) => operation(+op1, op, +op2));
      } else if (minPlusExp.test(mathExp)) {
        mathExp = mathExp.replace(minPlusExp, (match, op1, op, op2) => operation(+op1, op, +op2));
      }

      return resultNumber.test(mathExp) ? mathExp : simplify(mathExp);
    }

    return simplify(mathExp);
  }

  function findComplexParenthesizedExp(mathExp) {
    const complexParenthesizedExp = /[-+*/]/g;
    const startParens = mathExp.indexOf('(');
    let finishParens = -1;

    if (startParens === -1) return '';

    for (let i = startParens + 1, openingParens = 1, closingParens = 0; i < mathExp.length; i++) {
      if (mathExp[i] === '(') openingParens++;
      else if (mathExp[i] === ')') {
        closingParens++;
        if (closingParens !== openingParens) continue;
        finishParens = i;
        break;
      }
    }

    let parenthesizedExp = mathExp.slice(startParens, finishParens + 1);

    return (parenthesizedExp.match(complexParenthesizedExp).length > 1) ? parenthesizedExp : '';
  }

  function operation(operand1, operator, operand2) {
    switch (operator) {
      case '+':
        return operand1 + operand2;

      case '-':
        return operand1 - operand2;

      case '*':
        return operand1 * operand2;

      case '/':
        return operand1 / operand2;

      case '√':
        return Math.sqrt(operand1);

      case '^':
        return Math.pow(operand1, operand2);

      case 'sin': case 'cos':
        return Math[operator](operand1);
    }
  }

  return {
    enable,
    disable,
  };
}());

calculator.enable();
