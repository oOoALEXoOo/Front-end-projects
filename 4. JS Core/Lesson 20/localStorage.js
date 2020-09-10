//to show data from localStorage
console.log(localStorage);

//add to localStorage
localStorage.setItem('human', 'Kim');

//get from localStorage
let person = localStorage.getItem('human');
console.log(person);

//delete from localStorage
localStorage.removeItem('human');

//remove all from localStorage
localStorage.clear();

//working with objects
function Wallet(amount) {
    this.amount = amount;

    this.withdraw = function (money) {
        this.amount -= money;
    }

    this.showAmount = function () {
        return this.amount;
    }
}

function addToLocalStorage(key, value) {
    if (value === undefined) {
        localStorage.removeItem(key);
    } else {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

function getFromLocalStorage(key) {
    let json = localStorage.getItem(key);

    if (json === undefined) {
        return undefined;
    }

    return JSON.parse(json);
}

addToLocalStorage('Armani_Wallet', new Wallet(2000));
console.log(getFromLocalStorage('Armani_Wallet'));