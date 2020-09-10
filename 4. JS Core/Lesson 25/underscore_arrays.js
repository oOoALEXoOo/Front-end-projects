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

showData(arrayOfData, 0);

//1. first
let firstValue = _.first(arrayOfData);
showData(firstValue, 0);

//2. last
let lastValue = _.last(arrayOfData, 2);
showData(lastValue, 0);

//3. initial
let initialValue = _.initial(arrayOfData, 6);
showData(initialValue,0);

//4. rest
let restValue = _.rest(arrayOfData,8);
showData(restValue, 0);

//5. compact
let arrayWithFalsyValues = [0, 1, false, null, 5, null, 887, 0, undefined, 23, NaN];
let compactValue = _.compact(arrayWithFalsyValues);
showData(compactValue, 0);

//6. flatten
let beforeFlattenArray = [1, [[[[2, 2.5], [2.9]], 3], 4, [5], [6, [7]]]];
showData(beforeFlattenArray,0);
let afterFlattenValue = _.flatten(beforeFlattenArray);
showData(afterFlattenValue,0);

//7. without
let withoutArray = _.without(arrayOfData, 2,5,7);
showData(withoutArray, 0);

//8. union
let unionArray = _.union([10,20,30], [11,21,31], [91,92,93]);
showData(unionArray, 0);

//9. intersection
let intersectionValues = _.intersection([1,2,3,4], [3,4,5], [4,5,6]);
showData(intersectionValues, 0);

//10. difference
let differenceValues = _.difference([1,2,3,4], [3,4,5]);
showData(differenceValues, 0);

//11. uniq
let uniqValues = _.uniq([1,1,2,2,1,2,3,3,4,4,4,3]);
showData(uniqValues,0);

//12. zip
let zipArrays = _.zip(['anna', 'john', 'joseph'], [30, 40, 50], [true, false, true]);
showData(zipArrays, 0);

//13. unzip
let unzipArrays = _.unzip([['anna', 30, true], ['john', 40, false], ['joseph', 50, true]]);
showData(unzipArrays, 0);

//14. object
let objectValues = _.object(['name', 'age'], ['Alex', 30]);
showData(objectValues, 0);

//15. indexOf
let indexOfValues = _.indexOf([1,25,3,25,5], 25);
showData(indexOfValues, 0);

//15. lastIndexOf
let lastIndexOfValues = _.lastIndexOf([1,25,3,25,25], 25);
showData(lastIndexOfValues, 0);

//16. sortedIndex
let sortedIndexValues = _.sortedIndex([10,20,30,40,50], 25);
showData(sortedIndexValues, 0);

//17. findIndex
let findIndex = _.findIndex(arrayOfData, function (value) {
    return value % 2 === 0;
});
showData(findIndex, 0);

//17. findLastIndex
let findLastIndex = _.findLastIndex(arrayOfData, function (value) {
    return value % 2 === 0;
});
showData(findLastIndex, 0);

//18. range
let rangedValues = _.range(0, 50, 2);
showData(rangedValues);