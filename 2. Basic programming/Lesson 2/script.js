let n = 10;
// if (n < 0) {
//     console.log('Yes');
// }

// let age = prompt('Write your age');
// if (age >= 18) {
//     console.log('Ласкаво просимо');
// }
// else if (age == '') {
//     console.log('Вибачте, ви нічого не ввели');
// }
// else if (age == null) {
//     console.log('Вибачте, ви скасували вхід');
// }
// else if (age < 18) {
//     console.log('Вибачте, у вас недостатній вік');
// }
// else {
//     console.log('Ви ввели не число');
// }

// let club = prompt('Write your favorite club');
// if (club == 'Arsenal') {
//     let ask = prompt('Do you love Arsenal?');
//     if (ask == 'yes') {
//         console.log('me too');
//     }
//     else if (ask == 'no') {
//         console.log('opacha');
//     }
// }
// else {
//     console.log('Bad choice');
// }

// let n1 = 10;
// let n2 = '10';
// if (n1 === n2) {
//     console.log('Yes');
// }
// else {
//     console.log('No');
// }

// let n1 = 10;
// let n2 = '10';
// if (n1 != n2) {
//     console.log('Yes');
// }
// else {
//     console.log('No');
// }

// let bool = false;
// if (bool) {
//     console.log('true');
// }
// else {
//     console.log('false');
// }

// let n1 = +prompt('write first number');
// let n2 = +prompt('write second number');

// if (n1 < n2) {
//     console.log(`${n1} less than ${n2}`);
// }
// else if (n1 > n2) {
//     console.log(`${n1} more than ${n2}`);
// }
// else if (n1 == n2) {
//     console.log('numbers are equal');
// }

// let count = 0;
// console.log('Start count = ', count);
// let ask = prompt('Прізвище першого Президента незалежної України');
// if (ask == 'Кравчук' || ask == 'кравчук') {
//     console.log('Відповідь вірна');
//     count++;
// }

// let ask1 = prompt('Прізвище другого Президента незалежної України');
// if (ask1 == 'Кучма' || ask1 == 'кучма') {
//     console.log('Відповідь вірна');
//     count++;
// }

// console.log('Result count = ', count);

// let life = +prompt('Write your age');

// let ask = confirm('Do you like coffee?');
// if (ask) {
//     console.log('me too');
// }
// else {
//     console.log('so do I');
// }

let age = prompt('Write your age');
let correct = age >= 18 ? 'Welcome' : 'Good luck';
console.log(correct);