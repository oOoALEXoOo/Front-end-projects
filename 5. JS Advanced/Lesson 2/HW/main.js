import zoo from './Zoo/zoo.js';

const lionAlex = zoo.createLion('Alex', '11.08.2018');
const wolfMarty = zoo.createWolf('Marty', '05.10.2016');
const giraffeMelman = zoo.createGiraffe('Melman', '25.05.2017');
const elephantGloria = zoo.createElephant('Gloria', '03.12.2017');

const tamerOfLions = zoo.createTamer('Ukrainian', 'Ukrainian', 'Andrew West', 35, 1.8, 78, false, true, 'lions');
const tamerOfWolves = zoo.createTamer('German', 'German', 'Walter Whiter', 38, 1.79, 82, true, true, 'wolves');
const worker = zoo.createWorker('Ukrainian', 'Ukrainian', 'Misha Kolisnyk', 28, 1.75, 75, false, true, '1 year');
const vet = zoo.createVet('English', 'English', 'Emma Wist', 26, 1.68, 60, false, false, '2 years');
const librarian = zoo.createLibrarian('Ukrainian', 'Ukrainian', 'Julia Oliynyk', 29, 1.7, 65, true, true, '3 years');

zoo.makeAnimalGetOutOfCage(lionAlex, tamerOfLions);
zoo.makeAnimalGetOutOfCage(wolfMarty, tamerOfWolves);

zoo.makeAnimalGetInCage(lionAlex, tamerOfLions);
zoo.makeAnimalGetInCage(wolfMarty, tamerOfWolves);

zoo.toFeedAnimal(lionAlex, worker);
zoo.toFeedAnimal(wolfMarty, worker);
zoo.toFeedAnimal(giraffeMelman, worker);
zoo.toFeedAnimal(elephantGloria, worker);

zoo.toVetAnimal(lionAlex, vet);
zoo.toVetAnimal(wolfMarty, vet);
zoo.toVetAnimal(giraffeMelman, vet);
zoo.toVetAnimal(elephantGloria, vet);

zoo.addAnimalToDB(lionAlex, librarian);
zoo.addAnimalToDB(wolfMarty, librarian);
zoo.addAnimalToDB(giraffeMelman, librarian);
zoo.addAnimalToDB(elephantGloria, librarian);

zoo.getAnimalDB();

zoo.getAnimalFromDB(lionAlex.microchipImplant, librarian);

zoo.removeAnimalFromDB(lionAlex, librarian);

zoo.getAnimalDB();
