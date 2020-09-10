function show(data) {
    console.log(data);
}
//1
//a
// function checkAge(age) {
//     return age > 18 ? true : confirm('Do You have permission?');
// }
//b
function checkAge(age) {
    return age > 18 || confirm('Do You have permission?');
}

show(checkAge(17));

//2
function min() {
    let min = Number.POSITIVE_INFINITY;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) min = arguments[i];
    }
    return min;
}

show(min(4,5,-500,47,693,-15.25,-1024,456,-6992,0));