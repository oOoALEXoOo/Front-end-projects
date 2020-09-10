function showData(data, isShown = true) {
    isShown && console.log(data);
}

//1
let rangedArray = _.range(-50, 30, 4);
showData(rangedArray);

//2
rangedArray = _.shuffle(rangedArray);
showData(rangedArray);

//3
let indexOfMinValue = _.indexOf(rangedArray, _.min(rangedArray));
showData('index of min value: ' + indexOfMinValue);

let indexOfMaxValue = _.indexOf(rangedArray, _.max(rangedArray));
showData('index of max value: ' + indexOfMaxValue);