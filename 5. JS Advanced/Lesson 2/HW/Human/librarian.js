import Woman from './woman.js';
import mediator from '../Mediator/mediator.js';

export default class Librarian extends Woman {
  constructor(nationality, language, fullName, age, height, weight, isMarried, hasChildren,
    workWithDBExp) {
    super(nationality, language, fullName, age, height, weight, isMarried, hasChildren);
    this.workWithDBExp = workWithDBExp;
    this.proffesion = 'librarian';
  }

  addToDB(animal) {
    mediator.publish('addAnimalToDB', animal, this);
  }

  removeFromDB(animal) {
    mediator.publish('removeAnimalFromDB', animal, this);
  }

  getFromDB(animalID) {
    mediator.publish('getAnimalFromDB', animalID, this);
  }

  static getDB() {
    mediator.publish('getAnimalDB');
  }
}
