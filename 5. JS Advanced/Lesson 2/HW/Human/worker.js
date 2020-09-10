import Man from './man.js';
import mediator from '../Mediator/mediator.js';

export default class Worker extends Man {
  constructor(nationality, language, fullName, age, height, weight, isMarried, wasInAnArmy,
    workWithAnimalExp) {
    super(nationality, language, fullName, age, height, weight, isMarried, wasInAnArmy);
    this.workWithAnimalExp = workWithAnimalExp;
    this.proffesion = 'worker';
  }

  toFeed(animal) {
    mediator.publish('toFeedAnimal', animal, this);
  }
}
