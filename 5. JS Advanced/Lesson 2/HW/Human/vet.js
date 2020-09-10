import Woman from './woman.js';
import mediator from '../Mediator/mediator.js';

export default class Vet extends Woman {
  constructor(nationality, language, fullName, age, height, weight, isMarried, hasChildren,
    vetExp) {
    super(nationality, language, fullName, age, height, weight, isMarried, hasChildren);
    this.vetExp = vetExp;
    this.proffesion = 'vet';
  }

  toVet(animal) {
    mediator.publish('toVetAnimal', animal, this);
  }
}
