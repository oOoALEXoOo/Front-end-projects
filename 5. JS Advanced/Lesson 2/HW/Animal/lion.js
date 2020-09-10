import Animal from './animal.js';
import Carnivore from './carnivore.js';

export default class Lion extends Carnivore {
  constructor(nickname, dateOfBirth) {
    super('Vertebrate', 'Mammalia', 'Felidae', 'Panthera', 'Lion', nickname, dateOfBirth);
    this.walking = false;
    this.sleeping = false;
  }

  getOutOfCage(objs) {
    const tamer = Animal.toGetHumanInChargeOf(objs);
    super.getOutOfCage(tamer);
    this.toProtectTerritory();
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

  toProtectTerritory() {
    console.log(`${this.speciesOf} ${this.nickname} is walking around and protecting the territory`);
  }
}
