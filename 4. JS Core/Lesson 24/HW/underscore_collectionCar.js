function showCars(cars, isShown = true) {
    isShown && console.log(cars);
}

class Car {
    #brandName;
    #model;
    #productionYear;
    static collectionCar = [];

    constructor(brandName, model, productionYear) {
        this.#brandName = brandName;
        this.#model = model;
        this.#productionYear = productionYear;

        Car.setToCollection(this);
    }

    get brandName() {
        return this.#brandName;
    }
    get model() {
        return this.#model;
    }
    get productionYear() {
        return this.#productionYear;
    }

    static setToCollection(car) {
        this.collectionCar.push(car);
    }
    static getCollectionCar() {
        return this.collectionCar;
    }
}


new Car('Tesla', 'Model S', 2016);
new Car('Tesla', 'Model S', 2017);
new Car('Tesla', 'Model 3', 2019);
new Car('Tesla', 'Model 3', 2020);
new Car('Tesla', 'Model X', 2018);
new Car('Tesla', 'Model Y', 2020);

new Car('BMW', 'X3', 2012);
new Car('BMW', 'X3', 2015);
new Car('BMW', 'X4', 2017);
new Car('BMW', 'X5', 2018);
new Car('BMW', 'X6', 2019);
new Car('BMW', 'X7', 2019);
new Car('BMW', 'X7', 2020);

let cars = Car.getCollectionCar();

//2.
let carsGroupedByBrand = _.groupBy(cars, car => car.brandName);
showCars(carsGroupedByBrand, 1);

let carsGroupedByModel = _.groupBy(cars, car => car.model);
showCars(carsGroupedByModel, 1);

let carsGroupedByYear = _.groupBy(cars, car => car.productionYear);
showCars(carsGroupedByYear, 1);

//3.
let productionYear = +prompt('Enter production year to show cars by');
let carsFilteredByYear = _.filter(cars, car => car.productionYear === productionYear);
showCars(carsFilteredByYear, 1);

//4.
let oldestCar = _.min(cars, car => car.productionYear);
showCars(oldestCar, 1);

let brandNewCar = _.max(cars, car => car.productionYear);
showCars(brandNewCar, 1);