import Animal from './animal.js';
import Herbivore from './herbivore.js';

export default class Elephant extends Herbivore {
  constructor(nickname, dateOfBirth) {
    super('Vertebrate', 'Mammalia', 'Elephantidae', 'Elephantinae', 'Elephant', nickname, dateOfBirth);
    this.walking = false;
    this.sleeping = false;
  }

  getOutOfCage(objs) {
    const tamer = Animal.toGetHumanInChargeOf(objs);
    super.getOutOfCage(tamer);
    this.toRoam();
    this.sleeping = false;
    this.walking = true;
  }

  getInCage(objs) {
    const tamer = Animal.toGetHumanInChargeOf(objs);
    super.getInCage(tamer);
    this.toSleep();
    this.walking = false;
    this.sleeping = true;
  }

  toRoam() {
    console.log(`${super.toRoam()} to look for food with occasional playing the water games`);
  }
}
