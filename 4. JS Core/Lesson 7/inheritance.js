function show(data) {
    console.log(data);
}

function Machine() {
    let self = this;
    let isEnabled = false;

    self.setIsEnabled = data => isEnabled = data;
    self.getIsEnabled = () => isEnabled;
}

function CoffeeMachine(power) {
    Machine.call(this);
    let self = this;
    let _power = power;
    self.setPower = data => _power = data;
    self.getPower = () => _power;
}

let myCoffeeMachine = new CoffeeMachine(2000);
show(myCoffeeMachine.getIsEnabled());
show(myCoffeeMachine.getPower());

myCoffeeMachine.setIsEnabled(true);
myCoffeeMachine.setPower(3000);

show(myCoffeeMachine.getIsEnabled());
show(myCoffeeMachine.getPower());