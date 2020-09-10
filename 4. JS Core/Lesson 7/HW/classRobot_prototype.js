function show(data) {
    console.log(data);
}
function showWarning() {
    show('I supposed to be enabled');
}

function Robot() {
    let self = this;
    self.isEnabled = false;
}
Robot.prototype.setIsEnabled = data => this.isEnabled = data;
Robot.prototype.getIsEnabled = () => this.isEnabled;
Robot.prototype.work = () => (this.isEnabled) ? show('Я Robot – я просто працюю') : showWarning();

function CoffeeRobot() {}
CoffeeRobot.prototype = Object.create(Robot.prototype);
// CoffeeRobot.prototype.constructor = CoffeeRobot;
CoffeeRobot.prototype.work = () => (Robot.prototype.getIsEnabled()) ? show('Я CoffeeRobot – я варю каву') : showWarning();

function RobotDancer() { }
RobotDancer.prototype = Object.create(Robot.prototype);
// RobotDancer.prototype.constructor = RobotDancer;
RobotDancer.prototype.work = () => (Robot.prototype.getIsEnabled()) ? show('Я RobotDancer – я просто танцюю') : showWarning();

function RobotCooker() { }
RobotCooker.prototype = Object.create(Robot.prototype);
// RobotCooker.prototype.constructor = RobotCooker;
RobotCooker.prototype.work = () => (Robot.prototype.getIsEnabled()) ? show('Я RobotCooker – я просто готую') : showWarning();

let myRobot = new Robot();
let myCoffeeRobot = new CoffeeRobot();
let myRobotDancer = new RobotDancer();
let myRobotCooker = new RobotCooker();

let robots = [myRobot, myCoffeeRobot, myRobotDancer, myRobotCooker];
for (let robot = 0; robot < robots.length; robot++) {
    robots[robot].setIsEnabled(true);
    robots[robot].work();
}