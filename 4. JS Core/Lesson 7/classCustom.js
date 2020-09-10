function show(data) {
    console.log(data);
}

function CoffeeMachine(power) {
    let self = this;
    let _power = power;
    let WATER_AMOUNT = 100;

    self.getWaterAmount = () => WATER_AMOUNT;
    self.getPower = () => _power;
    self.setWaterAmount = waterAmount => WATER_AMOUNT = waterAmount;
    self.setPower = power => _power = power;
    self.runMachine = () => setTimeout(afterFinish, getBoiledTime());

    function getBoiledTime() {
        return 3000;
    }
    function afterFinish() {
        show('Coffee is ready');
    }

}


let myCoffeeMachine = new CoffeeMachine(1000);
show(myCoffeeMachine.getWaterAmount());
show(myCoffeeMachine.getPower());

myCoffeeMachine.setWaterAmount(3000);
myCoffeeMachine.setPower(2000);

show(myCoffeeMachine.getWaterAmount());
show(myCoffeeMachine.getPower());

myCoffeeMachine.runMachine();












