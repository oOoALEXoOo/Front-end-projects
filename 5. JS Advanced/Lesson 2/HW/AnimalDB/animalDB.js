export default (function animalDB() {
  const animalDataBase = new Map();

  function add(animal) {
    animalDataBase.set(animal.microchipImplant, animal);
  }

  function remove(animal) {
    animalDataBase.delete(animal.microchipImplant);
  }

  function get(animalID) {
    console.log(animalDataBase.get(animalID));
  }

  function getDB() {
    console.log(animalDataBase);
  }

  return {
    add,
    remove,
    get,
    getDB,
  };
}());
