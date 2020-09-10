import Man from './man.js';
import mediator from '../Mediator/mediator.js';

export default class Tamer extends Man {
  constructor(nationality, language, fullName, age, height, weight, isMarried, wasInAnArmy,
    isCompetentIn) {
    super(nationality, language, fullName, age, height, weight, isMarried, wasInAnArmy);
    this.isCompetentedIn = isCompetentIn;
    this.proffesion = 'tamer';
  }

  makeGetInCage(animal) {
    mediator.publish('makeAnimalGetInCage', animal, this);
  }

  makeGetOutOfCage(animal) {
    mediator.publish('makeAnimalGetOutOfCage', animal, this);
  }
}
