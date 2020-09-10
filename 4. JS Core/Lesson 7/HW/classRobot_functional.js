function show(data) {
    console.log(data);
}
function showWarning() {
    show('I supposed to be enabled');
}

function Robot() {
    let self = this;
    let isEnabled = false;

    self.setIsEnabled = data => isEnabled = data;
    self.getIsEnabled = () => isEnabled;
    self.work = () => (isEnabled) ? show('Я Robot – я просто працюю') : showWarning();
}
function CoffeeRobot() {
    Robot.call(this);
    let self = this;

    self.work = () => (self.getIsEnabled()) ? show('Я CoffeeRobot – я варю каву') : showWarning();
}
function RobotDancer() {
    Robot.call(this);
    let self = this;

    self.work = () => (self.getIsEnabled()) ? show('Я RobotDancer – я просто танцюю') : showWarning();
}
function RobotCooker() {
    Robot.call(this);
    let self = this;

    self.work = () => (self.getIsEnabled()) ? show('Я RobotCooker – я просто готую') : showWarning();
}

let myRobot = new Robot();
let myCoffeeRobot = new CoffeeRobot();
let myRobotDancer = new RobotDancer();
let myRobotCooker = new RobotCooker();

let robots = [myRobot, myCoffeeRobot, myRobotDancer, myRobotCooker];
for (let robot = 0; robot < robots.length; robot++) {
    robots[robot].setIsEnabled(true);
    robots[robot].work();
}