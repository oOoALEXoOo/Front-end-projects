import Tamer from '../Human/tamer.js';
import Worker from '../Human/worker.js';
import Librarian from '../Human/librarian.js';
import Vet from '../Human/vet.js';

import Giraffe from '../Animal/giraffe.js';
import Elephant from '../Animal/elephant.js';
import Lion from '../Animal/lion.js';
import Wolf from '../Animal/wolf.js';

export default (function zoo() {
  function createTamer(nationality, language, fullName, age,
    height, weight, isMarried, wasInAnArmy, isCompetentIn) {
    return new Tamer(nationality, language, fullName, age,
      height, weight, isMarried, wasInAnArmy, isCompetentIn);
  }

  function createWorker(nationality, language, fullName, age,
    height, weight, isMarried, wasInAnArmy, workWithAnimalExp) {
    return new Worker(nationality, language, fullName, age,
      height, weight, isMarried, wasInAnArmy, workWithAnimalExp);
  }

  function createLibrarian(nationality, language, fullName, age,
    height, weight, isMarried, hasChildren, workWithDBExp) {
    return new Librarian(nationality, language, fullName, age,
      height, weight, isMarried, hasChildren, workWithDBExp);
  }

  function createVet(nationality, language, fullName, age,
    height, weight, isMarried, hasChildren, vetExp) {
    return new Vet(nationality, language, fullName, age,
      height, weight, isMarried, hasChildren, vetExp);
  }

  function createGiraffe(nickname, dateOfBirth) {
    return new Giraffe(nickname, dateOfBirth);
  }

  function createElephant(nickname, dateOfBirth) {
    return new Elephant(nickname, dateOfBirth);
  }

  function createLion(nickname, dateOfBirth) {
    return new Lion(nickname, dateOfBirth);
  }

  function createWolf(nickname, dateOfBirth) {
    return new Wolf(nickname, dateOfBirth);
  }

  function makeAnimalGetInCage(animal, tamer) {
    tamer.makeGetInCage(animal);
  }

  function makeAnimalGetOutOfCage(animal, tamer) {
    tamer.makeGetOutOfCage(animal);
  }

  function toFeedAnimal(animal, worker) {
    worker.toFeed(animal);
  }

  function addAnimalToDB(animal, librarian) {
    librarian.addToDB(animal);
  }

  function removeAnimalFromDB(animal, librarian) {
    librarian.removeFromDB(animal);
  }

  function getAnimalFromDB(animalID, librarian) {
    librarian.getFromDB(animalID);
  }

  function getAnimalDB() {
    Librarian.getDB();
  }

  function toVetAnimal(animal, vet) {
    vet.toVet(animal);
  }

  return {
    createTamer,
    createWorker,
    createLibrarian,
    createVet,
    createGiraffe,
    createElephant,
    createLion,
    createWolf,
    makeAnimalGetInCage,
    makeAnimalGetOutOfCage,
    toFeedAnimal,
    addAnimalToDB,
    removeAnimalFromDB,
    getAnimalFromDB,
    getAnimalDB,
    toVetAnimal,
  };
}());
