// exit: {
//     while (true) {
//         while (true) {
//             let ask = +prompt('Write magic number');
//             if (ask == 1000) break exit;
//         }
//     }
// }

// function randomize(number) {
//     return Math.round(Math.random()*number);
// }

// let randomize = function(number) {
//     return Math.round(Math.random()*number);
// }

// let randomize = number => Math.round(Math.random()*number);

// function randomColor() {
//     let r = randomize(255);
//     let g = randomize(255);
//     let b = randomize(255);
//     document.body.style.background = `rgb(${r}, ${g}, ${b})`;
// }

// function getId(idName) {
//     return document.getElementById(idName);
// }

let getId = idName => document.getElementById(idName);

getId('add').onclick = function() {
    let myLogin = getId('login').value;
    let myPassword = getId('password').value;
    console.log(myLogin, myPassword);
}