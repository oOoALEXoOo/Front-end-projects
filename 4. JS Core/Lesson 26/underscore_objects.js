function showData(data, isDisplayed = true) {
    if (isDisplayed) {
        console.log(data);
    }
}

let objectToTest = {name: 'John', age: 22};

//1. keys
let keysObject = _.keys(objectToTest);
showData(keysObject, 0);

//2. values
let valuesObject = _.values(objectToTest);
showData(valuesObject, 0);

//3. mapObject
let mapObject = _.map(objectToTest, function (value, key) {
    return value + 1;
});
showData(mapObject, 0);

//4. pairs
let pairsValues = _.pairs(objectToTest);
showData(pairsValues, 0);

//5. invert
let invertedObject = _.invert(objectToTest);
showData(invertedObject, 0);

//6. create

function Person(name) {
    this.name = name;
}

let createdObj = _.create(Person.prototype, {name: 'John', age: 22});
showData(createdObj, 0);

//7. functions
showData(_.functions(_.prototype), 0);

//8. extend
let extendedObject = _.extend({name: 'Joye'}, {age: 35});
showData(extendedObject, 0);

//9. pick
let pickedObject = _.pick(objectToTest, 'name');
showData(pickedObject, 1);

//10. omit
let omittedObject = _.omit(objectToTest, 'age');
showData(omittedObject, 0);

//11. defaults
let defaultsObject = _.defaults({isPerson: true}, objectToTest);
showData(defaultsObject, 0);

//12. has
let hasKeys = _.has(objectToTest, 'name');
showData(hasKeys, 0);

//13. isEqual
let isEqualObject = _.isEqual(objectToTest, {});
showData(isEqualObject, 0);

//14. isMatch
let isMatch = _.isMatch(objectToTest, {age: 22});
showData(isMatch, 0);

//15. isEmpty
let isEmptyObject = _.isEmpty({});
showData(isEmptyObject, 0);

//16. isElement
let isDOMElement = _.isElement(document.createElement('div'));
showData(isDOMElement, 0);

//17. isArray
let isArray = _.isArray([]);
showData(isArray, 0);

//18. isObject
showData(_.isObject([]), 0);

//19. isFunction
showData(_.isFunction(showData), 0);

//20. isFinite
showData(_.isFinite(Infinity), 0);

//21. isBoolean
showData(_.isBoolean(2 > 3), 0);

//22. isDate
showData(_.isDate(new Date()), 0);

//23. isNan
showData(_.isNaN('2a' / 2), 0);

//24. isNull
showData(_.isNull(null), 0);


//25. isUndefined
let test;
showData(_.isUndefined(test), 0);
