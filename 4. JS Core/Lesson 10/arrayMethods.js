function show(data) {
    console.log(data)
}

//1. forEach
let array = [7,4,2,11,3];
// function showAllInsideArray()
// array.forEach(show);

let sum = 0;
array.forEach(function (value) {
    sum += value;
});
// show(sum);

function multiplyEachArrayElm(value, index, array) {
    array[index] = value * 10;
}

// array.forEach(multiplyEachArrayElm);
// array.forEach(show);

//2. map
let results = array.map(function (value) {
    return value*100;
});
// show(results);

//3. filter
let evenNumbers = array.filter(function (value) {
    return value%2 == 0;
});

// show(evenNumbers);

//4. some even

show(array);

let every = array.every(value => value %2 === 0);
let some = array.some(value => value %2 === 0);

show('every = ' + every);
show('some = ' + some);

//5. reduce
let sumOffArrayValues = array.reduce(function (a,b) {
    return a + b;
}, 0);
show(sumOffArrayValues);

//6. indexOf, lastIndexOf
array = [7,4,2,11,2,3];

show('index of 2 is = ' + array.indexOf(2));
show('index of 2 is = ' + array.lastIndexOf(2));







