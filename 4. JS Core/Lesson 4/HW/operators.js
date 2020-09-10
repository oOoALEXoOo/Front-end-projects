//1
// let oddOrEven = +prompt('Enter some integer number')%2 == 0 ? `Number is even` : `Number id odd`;
// console.log(oddOrEven);

//2
// let firstNumber = +prompt('Enter first number');
// let secondNumber = +prompt('Enter second number');
// let quotient10FirstNumber = Math.floor(firstNumber/10), remainder10FirstNumber = firstNumber%10;
// let quotient10SecondNumber = Math.floor(secondNumber/10), remainder10SecondNumber = secondNumber%10;
//
// if ((quotient10FirstNumber == quotient10SecondNumber) || (quotient10FirstNumber + quotient10SecondNumber == 1)) {
//     remainder10FirstNumber = !quotient10FirstNumber ? 10 - remainder10FirstNumber : remainder10FirstNumber;
//     remainder10SecondNumber = !quotient10SecondNumber ? 10 - remainder10SecondNumber : remainder10SecondNumber;
//     if (remainder10FirstNumber < remainder10SecondNumber) console.log(`${firstNumber} is closer to 10`);
//     else if (remainder10SecondNumber < remainder10FirstNumber)  console.log(`${secondNumber} is closer to 10`);
//     else console.log(`${firstNumber} and ${secondNumber} are equally close to 10`);
// } else {
//     if (quotient10FirstNumber < quotient10SecondNumber) console.log(`${firstNumber} is closer to 10`);
//     else console.log(`${secondNumber} is closer to 10`);
// }

//3
// for (let i = 1000; i <= 9999; console.log(i), i+=3);

//4
// for (let i = 0, j = 1; i < 55; console.log(j), j+=2, i++);

//5
// let
//     a = 1, b = -2, c = -3;
//     // a = 1, b = 12, c = 36;
// if (a != 0) {
//     let D = b**2 - 4*a*c;
//     if (D > 0) {
//         let x1 = (-b + Math.sqrt(D))/2*a;
//         let x2 = (-b - Math.sqrt(D))/2*a;
//         console.log(`x1 = ${x1}\nx2 = ${x2}`);
//     }
//     else if (D == 0) {
//         let x = (-b + Math.sqrt(D))/2*a;
//         console.log('x = ', x);
//     }
//     else console.log('There are no real roots');
// } else console.log('The equation is linear');

//6
// let startNumber = 90;
// while (startNumber >= 0) {
//     console.log(startNumber);
//     startNumber-=5;
// }

//7
for (let i = 0, pow2 = 2; i < 20; console.log(pow2**++i));