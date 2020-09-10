import Human from '../Human/human.js';

export default class Animal {
  constructor(phylumOf, classOf, orderOf, familyOf, genusOf, speciesOf, nickname, dateOfBirth) {
    this.phylumOf = phylumOf;
    this.classOf = classOf;
    this.orderOf = orderOf;
    this.familyOf = familyOf;
    this.genusOf = genusOf;
    this.speciesOf = speciesOf;
    this.nickname = nickname;
    this.dateOfBirth = dateOfBirth;
    this.microchipImplant = Animal.generateIDNumber();
  }

  toEat() {
    return `${this.speciesOf} ${this.nickname} was fed`;
  }

  toWalk() {
    return `${this.speciesOf} ${this.nickname} was walked`;
  }

  toRun() {
    return `${this.speciesOf} ${this.nickname} is running`;
  }

  toSleep() {
    console.log(`${this.speciesOf} ${this.nickname} is sleeping`);
  }

  static generateIDNumber() {
    let idNumber = '';
    for (let i = 0; i < 15; i++) {
      idNumber += Math.floor(Math.random() * 10);
    }
    return idNumber;
  }

  static toGetHumanInChargeOf(objs) {
    return objs.find((human) => human instanceof Human);
  }
}
