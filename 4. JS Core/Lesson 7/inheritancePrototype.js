function show(data) {
    console.log(data);
}

function Machine() {
    let self = this;
    self.isEnabled = false;
}
Machine.prototype.setIsEnabled = data => this.isEnabled = data;
Machine.prototype.getIsEnabled = () => this.isEnabled;

function CoffeeMachine(power) {
    let self = this;
    self.power = power;
}
CoffeeMachine.prototype = Object.create(Machine.prototype);
CoffeeMachine.prototype.constructor = CoffeeMachine;

CoffeeMachine.prototype.setPower = data => this.power = data;
CoffeeMachine.prototype.getPower = () => this.power;

let myCoffeeMachine = new CoffeeMachine(2000);

myCoffeeMachine.setIsEnabled(true);
myCoffeeMachine.setPower(3000);

show(myCoffeeMachine.getIsEnabled());
show(myCoffeeMachine.getPower());