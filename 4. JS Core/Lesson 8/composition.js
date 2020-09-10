function show(data) {
    console.log(data);
}

function Person(amountOfMoney) {
    let wallet = new Wallet(amountOfMoney);

    this.buy = function (price) {
        wallet.withdraw(price);
    }
    this.countMoney = function () {
        wallet.showAmount();
    }
}

function Wallet(amount) {
    this.amount = amount;

    this.withdraw = function (money) {
        this.amount -= money;
    }
    this.showAmount = function () {
        show(this.amount);
    }
}

// let person = new Person(2000);
// person.buy(120);
// person.countMoney();
//
// person.buy(149);
// person.countMoney();
//
// person.buy(1000);
// person.countMoney();

let p1 = new Person(1000);
let p2 = new Person(2000);

p1.buy(100);
p2.buy(100);

p1.countMoney();
p2.countMoney();