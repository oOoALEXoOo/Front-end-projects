// let ask = prompt(`What's the official name of JavaScript?`);
// if (ask == 'ECMAScript') {
//     console.log('Right!');
// } else {
//     console.log('You don\'t know? ECMAScript!');
// }

// let a = 5, b = -5;
// let result = (a + b < 4) ? 'A little' : 'Too much';
// console.log(result);

// let login = prompt('Enter login', '');
// let message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор') ? 'Здраствуйте' :
//     (login == '') ? 'Нет логина' : '';
// console.log(message);

// while (true) {
//     let askNumber = +prompt('Enter number > 100');
//     if (askNumber > 100 || !askNumber) break;
// }

let start = 2, n = 10;

// nextPrime: for (let i = start; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i%j == 0) continue nextPrime;
//     }
//     console.log(i);
// }

function sayHi() {
    console.log('Hi!');
}
// console.log(sayHi);

// let func = sayHi;
// func();
// sayHi();

// let sum = function (a, b) {
//     return a + b;
// }
// let sum = (a, b) => a + b;
//
// console.log(sum(5,4));
//
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// ask("Are you agree?", () => alert('You agreed'), () => alert('You canceled'));


// let animal = {
//     name: "Animal",
//     eat() {
//         alert(`${this.name} eats`);
//     }
// };
//
// let rabbit = {
//     __proto__: animal,
//     name: "Rabbit",
//     eat() {
//         this.__proto__.eat.call(this);
//     }
// };
//
// rabbit.eat();

// let arr = ['A', 'B', 'C'];
//
// console.log(arr);
//
// // arr = arr.slice(1);
// delete arr[0];
//
// console.log(arr);

console.log(Boolean(""));
console.log("A".toLowerCase());

let date1 = new Date(2020,0,2);
let date2 = new Date(2020,0,3);

console.log(date1);
console.log(date2);

console.log((date2 - date1)/3600/1000);













