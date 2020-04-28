//1.

// let someNumber = +prompt('Enter some number');

// if (someNumber > 0) console.log(1);
// else if (someNumber < 0) console.log(-1);
// else console.log(0);

//2.

// let login = prompt(`Who's there?`);

// if (login == "Admin") {
//     let password = prompt('Password?');
//     if (password == "TheMaster") console.log('Welcome!');
//     else if (password == null) console.log('Canceled.');
//     else console.log('Wrong password');
// } else if (login == null) console.log('Canceled.');
// else console.log(`I don't know you`);

//3.

let login = prompt(`Who's there?`);

switch(login) {
    case "Admin":
        let password = prompt('Password?');
        switch(password) {
            case "TheMaster":
                console.log('Welcome!');
                break;
            case null:
                console.log('Canceled.');
                break;
            default:
                console.log('Wrong password');
        }
        break;
    case null:
        console.log('Canceled.');
        break;
    default:
        console.log(`I don't know you`);
}