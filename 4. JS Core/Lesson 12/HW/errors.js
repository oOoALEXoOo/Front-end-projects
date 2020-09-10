function show(data) {
    console.log(data);
}

function checkForErrors(operand1, operand2, operator) {
    try {
        if (typeof operand1 != 'number' || typeof operand2 != 'number') {
            throw new TypeError("Type of operands expected to be number");
        }
        if (operator !== '+' && operator !== '-' &&
            operator !== '*' && operator !== '/') {
            throw new SyntaxError("Type of operation is not defined");
        }
    }
    catch (unknownError) {
        throw unknownError;
    }
}

function operation(operand1 = 1, operand2 = 1, operator) {
    try { checkForErrors(operand1, operand2, operator); }
    catch (error) {
        if (error.name === 'TypeError') {
            show('TypeError: ' + error.message);
        } if (error.name === 'SyntaxError') {
            show('SyntaxError: ' + error.message);
        }
        return 0;
    }
    switch (operator) {
        case '+':
            console.log(`${operand1} ${operator} ${operand2} = `, operand1 + operand2);
            break;

        case '-':
            console.log(`${operand1} ${operator} ${operand2} = `, operand1 - operand2);
            break;

        case '*':
            console.log(`${operand1} ${operator} ${operand2} = `, operand1 * operand2);
            break;

        case '/':
            console.log(`${operand1} ${operator} ${operand2} = `, operand1 / operand2);
            break;
    }
}

operation(true, 3, '+');
operation(10, 3, '-');
operation(4, 3, '*');
operation(10, 2, 'something went wrong');