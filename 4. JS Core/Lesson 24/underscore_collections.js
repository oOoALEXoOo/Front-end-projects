let arrayOfData = [1,2,3,4,5,6,7,8,9,10];
let arrayOfObjects = [
    {name: 'Bob', age: 76},
    {name: 'Daniel', age: 16},
    {name: 'Sam', age: 39},
    {name: 'Andrew', age: 16},
    {name: 'Pol', age: 39}
];

function showData(data, isDisplayed = true) {
    if (isDisplayed) {
        console.log(data);
    }
}

//1. each
_.each(arrayOfData, function (data) {
    showData(data, false);
});

//2. map
let mappedArray = _.map(arrayOfData, value => value*10);

showData(mappedArray, 0);

//3. find
let firstFoundElm = _.find(arrayOfData, function (value) {
    return value % 2 === 0;
});
showData(firstFoundElm, 0);

//4. filter
let filterArray = _.filter(arrayOfData, function (value) {
    return value % 2 === 0;
});
showData(filterArray, 0);

//5. where
let whereArray = _.where(arrayOfObjects, {age: 16});
showData(whereArray, 0);

//6. findWhere
let findWhereElm = _.findWhere(arrayOfObjects, {age: 16});
showData(findWhereElm, 0);

//7. reject
let rejectedArray = _.reject(arrayOfData, function (value) {
    return value % 2 === 0;
});
showData(rejectedArray, 0);

//8. isEvery
let isEveryValueOfArray = _.every(arrayOfData, function (value) {
    return value % 2 === 0;
});
showData(isEveryValueOfArray, 0);

//9. some
let isSomeValueOfArray = _.some(arrayOfData, function (value) {
    return value % 2 === 0;
});
showData(isSomeValueOfArray, 0);

//10. pluck
let pluckArray = _.pluck(arrayOfObjects, 'name');
showData(pluckArray, 0);

//11. max
let maxValue = _.max(arrayOfObjects, function (value) {
    return value.age;
});
showData(maxValue, 0);

//11. min
let mimValue = _.min(arrayOfObjects, function (value) {
    return value.age;
});
showData(mimValue, 0);

//12. sortBy
let sortByArray = _.sortBy(arrayOfObjects, 'age');
showData(sortByArray, 0);

//14. groupBy
let groupByArray = _.groupBy(arrayOfObjects, function (value) {
    return value.age;
});
showData(groupByArray, 0);

//15. indexBy
let indexByArray = _.indexBy(arrayOfObjects, 'age');
showData(indexByArray, 0);

//16. countBy
let countByArray = _.countBy(arrayOfData, function (value) {
    return value % 2 === 0 ? 'even' : 'odd';
});
showData(countByArray, 0);

//17. shuffle
let shuffledArray = _.shuffle(arrayOfData);
showData(shuffledArray, 1);

//18. sample
let sampleArray = _.sample(arrayOfData, 4);
showData(sampleArray, 0);

//18. partition
let partitionArray = _.partition(arrayOfData, function (value) {
    return value % 2 === 0;
});
showData(partitionArray, 0);