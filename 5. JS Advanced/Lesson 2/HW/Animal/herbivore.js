import Animal from './animal.js';

export default class Herbivore extends Animal {
  constructor(phylumOf, classOf, familyOf, genusOf, speciesOf, nickname, dateOfBirth) {
    super(phylumOf, classOf, 'Herbivore', familyOf, genusOf, speciesOf, nickname, dateOfBirth);
  }

  getInCage(tamer) {
    console.log(`${this.toWalk()} to the cage by ${tamer.proffesion} ${tamer.fullName}`);
  }

  getOutOfCage(tamer) {
    console.log(`${this.toWalk()} out of the cage by ${tamer.proffesion} ${tamer.fullName}`);
  }

  toRoam() {
    return `${this.speciesOf} ${this.nickname} is roaming around`;
  }

  toEat(objs) {
    const worker = Animal.toGetHumanInChargeOf(objs);
    console.log(`${super.toEat()} plants by ${worker.proffesion} ${worker.fullName}`);
  }

  getAddedToDB(objs) {
    const librarian = Animal.toGetHumanInChargeOf(objs);
    console.log(`${this.speciesOf} ${this.nickname} was added to animal database by ${librarian.proffesion} ${librarian.fullName}`);
  }

  getRemovedFromDB(objs) {
    const librarian = Animal.toGetHumanInChargeOf(objs);
    console.log(`${this.speciesOf} ${this.nickname} was removed from animal database by ${librarian.proffesion} ${librarian.fullName}`);
  }

  getVetted(objs) {
    const vet = Animal.toGetHumanInChargeOf(objs);
    console.log(`${this.speciesOf} ${this.nickname} was inspected and got necessary vaccinations for herbivores by ${vet.proffesion} ${vet.fullName}`);
  }
}
