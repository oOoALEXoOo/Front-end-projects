function show(data) {
    console.log(data);
}

class Car {
    #manufacturer;
    #modelName;
    #steeringWheel;
    #wheels;
    #body;

    constructor(manufacturer, modelName, diameterOfSteeringWheel, sizeOfTire, amountSeats) {
        this.#manufacturer = manufacturer;
        this.#modelName = modelName;
        this.#steeringWheel = new SteeringWheel(diameterOfSteeringWheel);
        this.#wheels = new Wheels(sizeOfTire);
        this.#body = new carBody(amountSeats);
    }

    startPressButtonBeep() {
        this.#steeringWheel.buttonBeepTurnOn();
    }
    stopPressButtonBeep() {
        this.#steeringWheel.buttonBeepTurnOff();
    }
    turnLeftSteeringWheel(degreeAmount) {
        this.#steeringWheel.turnLeft(degreeAmount, this.#wheels);
    }
    turnRightSteeringWheel(degreeAmount) {
        this.#steeringWheel.turnRight(degreeAmount, this.#wheels);
    }
    setSteeringWheelInStartPos() {
        this.#steeringWheel.setStartPosition(this.#wheels);
    }

    setNewTire(newSizeOfTire) {
        this.#wheels.changeSizeOfTire(newSizeOfTire);
    }
    removeWheel() {
        this.#wheels.decreaseAmount();
    }
    setNewWheel() {
        this.#wheels.increaseAmount();
    }

    putPassenger() {
        this.#body.decreaseAmountFreeSeats();
    }
    dropOffPassenger() {
        this.#body.increaseAmountFreeSeats();
    }

    showInfoAbout() {
        show(`manufacturer: ${this.#manufacturer}\nmodel: ${this.#modelName}`);
        this.#steeringWheel.showInfoAbout();
        this.#wheels.showInfoAbout();
        this.#body.showInfoAbout();
    }
}

class SteeringWheel {
    #diameter;
    #isButtonBeep = false;
    #positionDegree = 0;

    constructor(diameter) {
        this.#diameter = diameter;
    }

    buttonBeepTurnOn = () => this.#isButtonBeep = true;
    buttonBeepTurnOff = () => this.#isButtonBeep = false;
    turnLeft = (degreeAmount, wheels) => {
        this.#positionDegree -= degreeAmount;
        wheels.turnLeft(degreeAmount/5);
    }
    turnRight = (degreeAmount, wheels) => {
        this.#positionDegree += degreeAmount;
        wheels.turnRight(degreeAmount/5);
    }
    setStartPosition = (wheels) => {
        this.#positionDegree = 0;
        wheels.setStartPosition();
    }

    showInfoAbout() {
        show (`diameter of steering wheel: ${this.#diameter}\n` +
                `beep's button's pressing: ${this.#isButtonBeep}\n` +
                `position of steering wheel degree: ${this.#positionDegree}`);
    }
}

class Wheels {
    #sizeOfTire;
    #amount = 4;
    #positionDegree = 0;

    constructor(sizeOfTire) {
        this.#sizeOfTire = sizeOfTire;
    }

    changeSizeOfTire = sizeOfTire => this.#sizeOfTire = sizeOfTire;
    decreaseAmount = () => {
        if (!this.#amount) {
            throw new Error('Amount of wheels cannot be negative');
        }
        return --this.#amount;
    }
    increaseAmount = () => {
        if (this.#amount === 4) {
            throw new Error('Amount of wheels cannot be more than four');
        }
        return ++this.#amount;
    }
    turnLeft = degreeAmount => this.#positionDegree -= degreeAmount;
    turnRight = degreeAmount => this.#positionDegree += degreeAmount;
    setStartPosition = () => this.#positionDegree = 0;

    showInfoAbout() {
        show(`sizeOfTire: ${this.#sizeOfTire}\namount wheels: ${this.#amount}\n` +
                  `position of wheels degree: ${this.#positionDegree}`);
    }
}

class carBody {
    #amountSeats;
    #amountPassengerSeats;

    constructor(amountSeats) {
        this.#amountSeats = amountSeats;
        this.#amountPassengerSeats = --amountSeats; //driver
    }

    decreaseAmountFreeSeats = () => {
        if (!this.#amountPassengerSeats) {
            throw new Error('Amount of free seats cannot be negative');
        }
        return --this.#amountPassengerSeats;
    }
    increaseAmountFreeSeats = () => {
        if (this.#amountPassengerSeats === this.#amountSeats - 1) {
            throw new Error('There are already no free seats');
        }
        return ++this.#amountPassengerSeats;
    }

    showInfoAbout() {
        show(`amountSeats: ${this.#amountSeats}\namountPassengerSeats: ${this.#amountPassengerSeats}`);
    }
}

let bmwX5 = new Car("BMW","X5", 37, "255/50 R19 285/45 R19", 7);
bmwX5.showInfoAbout();

bmwX5.removeWheel();
bmwX5.setNewWheel();
bmwX5.setNewTire("275/40 R20 315/35 R20");
bmwX5.putPassenger();
bmwX5.putPassenger();
bmwX5.turnLeftSteeringWheel(87);
bmwX5.startPressButtonBeep();
bmwX5.stopPressButtonBeep();
bmwX5.dropOffPassenger();

bmwX5.showInfoAbout();

bmwX5.turnRightSteeringWheel(95);

bmwX5.showInfoAbout();

bmwX5.setSteeringWheelInStartPos();

bmwX5.showInfoAbout();
