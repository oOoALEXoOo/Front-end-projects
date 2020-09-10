import Animal from './animal.js';

export default class Carnivore extends Animal {
  constructor(phylumOf, classOf, familyOf, genusOf, speciesOf, nickname, dateOfBirth) {
    super(phylumOf, classOf, 'Carnivore', familyOf, genusOf, speciesOf, nickname, dateOfBirth);
  }

  getInCage(tamer) {
    console.log(`${this.toWalk()} to the cage by ${tamer.proffesion} ${tamer.fullName}`);
  }

  getOutOfCage(tamer) {
    console.log(`${this.toWalk()} out of the cage by ${tamer.proffesion} ${tamer.fullName}`);
  }

  toEat(objs) {
    const worker = Animal.toGetHumanInChargeOf(objs);
    console.log(`${super.toEat()} meat by ${worker.proffesion} ${worker.fullName}`);
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
    console.log(`${this.speciesOf} ${this.nickname} was inspected and got necessary vaccinations for carnivores by ${vet.proffesion} ${vet.fullName}`);
  }
}
