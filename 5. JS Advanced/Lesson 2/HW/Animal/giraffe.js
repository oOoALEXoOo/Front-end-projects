import Animal from './animal.js';
import Herbivore from './herbivore.js';

export default class Giraffe extends Herbivore {
  constructor(nickname, dateOfBirth) {
    super('Vertebrate', 'Mammalia', 'Giraffidae', 'Giraffa', 'Giraffe', nickname, dateOfBirth);
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
    console.log(`${super.toRoam()} and browsing for the food`);
  }
}
