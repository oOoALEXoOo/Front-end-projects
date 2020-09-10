import Animal from './animal.js';
import Carnivore from './carnivore.js';

export default class Wolf extends Carnivore {
  constructor(nickname, dateOfBirth) {
    super('Vertebrate', 'Mammalia', 'Canidae', 'Canis', 'Wolf', nickname, dateOfBirth);
    this.running = false;
    this.sleeping = false;
  }

  getOutOfCage(objs) {
    const tamer = Animal.toGetHumanInChargeOf(objs);
    super.getOutOfCage(tamer);
    this.toBePartOfPack();
    this.sleeping = false;
    this.running = true;
  }

  getInCage(objs) {
    const tamer = Animal.toGetHumanInChargeOf(objs);
    super.getInCage(tamer);
    this.toSleep();
    this.running = false;
    this.sleeping = true;
  }

  toBePartOfPack() {
    console.log(`${this.toRun()} and socializing with pack`);
  }
}
