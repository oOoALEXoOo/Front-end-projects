function show(data) {
    console.log(data);
}

function User() {
    this.getData = function () {
        show(this.name + ', ' + this.age);
    }
}
// User.prototype.getData = () => show(this.name + ', ' + this.age);

User.createWithoutParameters = function () {
    let user = new User();
    user.name = 'DEFAULT';
    return user;
}

User.createWithParameters = function (name, age) {
    let user = new User();
    user.name = name;
    user.age = age;
    return user;
}

let user1 = User.createWithoutParameters();
let user2 = User.createWithParameters("Kira", 22);

user1.getData();
user2.getData();





