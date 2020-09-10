// Завдання 1

let month = +prompt('Write number of month, please');
switch (month) {
    case 1:
    case 2:
    case 12:
        alert('This is winter');
        break;

    case 3:
    case 4:
    case 5:
        alert('This is spring');
        break;
        
    case 6:
    case 7:
    case 8:
        alert('This is summer');
        break;

    case 9:
    case 10:
    case 11:
        alert('This is autumn');
        break;

    default:
        alert(`The number isn't in the range from 1 to 12`);
        break;
}

// Завдання 2

function getNumberInfo(number) {
    !number ? console.log(`${number} is zero`) :
    number%2 == 0 ? console.log(`${number} is even`) :
    number%2 != 0 ? console.log(`${number} is odd`) : null;
}

getNumberInfo(+prompt(`Write some number to get info about`));

// Завдання 3

function operation(operand1 = 1, operand2 = 1, operator) {
    if (!operator) return console.log(`Define the type of operation`);
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
    
        default:
            console.log(`Define the correct type of operation, please`);
            break;
    }
}

operation(2,3,'+');
operation(10,3,'-');
operation(4,3,'*');
operation(10,2,'/');