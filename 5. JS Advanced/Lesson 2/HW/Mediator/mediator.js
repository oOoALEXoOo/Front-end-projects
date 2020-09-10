import Animal from '../Animal/animal.js';
import animalDB from '../AnimalDB/animalDB.js';

const mediator = (function mediator() {
  const channels = {};

  function subscribe(channel, func) {
    if (!channels[channel]) {
      channels[channel] = [];
    }

    channels[channel].push(func);
  }

  function publish(channel, ...restArgs) {
    if (!channels[channel]) {
      return;
    }

    const thisAnimal = restArgs.find((object) => object instanceof Animal);

    channels[channel].forEach((func) => {
      if (typeof func === 'string') thisAnimal[func](restArgs);
      else func.apply(animalDB, restArgs);
    });
  }

  return {
    subscribe,
    publish,
  };
}());

mediator.subscribe('makeAnimalGetInCage', 'getInCage');
mediator.subscribe('makeAnimalGetOutOfCage', 'getOutOfCage');

mediator.subscribe('toFeedAnimal', 'toEat');

mediator.subscribe('addAnimalToDB', animalDB.add);
mediator.subscribe('addAnimalToDB', 'getAddedToDB');

mediator.subscribe('removeAnimalFromDB', animalDB.remove);
mediator.subscribe('removeAnimalFromDB', 'getRemovedFromDB');

mediator.subscribe('getAnimalFromDB', animalDB.get);

mediator.subscribe('getAnimalDB', animalDB.getDB);

mediator.subscribe('toVetAnimal', 'getVetted');

export default mediator;
