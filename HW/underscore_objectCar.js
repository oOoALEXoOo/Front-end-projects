function showCars(cars, isShown = true) {
    isShown && console.log(cars);
}

class Car {
    brandName;
    model;
    productionYear;

    constructor(brandName, model, productionYear) {
        this.brandName = brandName;
        this.model = model;
        this.productionYear = productionYear;
    }
}

//2
let teslaModelS = _.create(Car.prototype, {
    brandName: 'Tesla',
    model: 'Model S',
    productionYear: 2016
});
showCars(teslaModelS);

//3
let invertedTeslaModelS = _.invert(teslaModelS);
showCars(invertedTeslaModelS);

//4
let pickedTeslaModelS = _.pick(teslaModelS, 'brandName', 'productionYear');
let omittedTeslaModelS = _.omit(teslaModelS, 'model');
showCars(pickedTeslaModelS);
showCars(omittedTeslaModelS);