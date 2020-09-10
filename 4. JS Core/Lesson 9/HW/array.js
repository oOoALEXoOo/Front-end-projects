function show(data) {
    console.log(data)
}
//1
let products = [1,2,3,4,5,6,7];
show(products[products.length - 1]);

//2
let styles = ["Jazz", "Blues"];
styles.push("rock'n'roll");
// styles[styles.length] = "rock'n'roll";
show(styles);

styles.splice(-2,1, "Classic");
// styles[styles.length - 2] = "Classic";
show(styles);

show(styles.shift());

// styles.unshift('Rap', 'Reggae');
styles.splice(0,0, 'Rap', 'Reggae');
show(styles);

//3
// let find = function (arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== value) continue;
//         return i;
//     }
//     return -1;
// }
let find = (arr, value) => arr.includes(value) ? arr.indexOf(value) : -1;

let array = [1,2,3,4,5,6,7,8,9,10];
show(find(array, 5));
show(find(array, 12));
show(find(array, "5"));

//4
let filterRange = function (array, a ,b) {
    for (let arrayKey in array) {
        if (typeof array[arrayKey] == 'number') continue;
        throw new Error('Array must include only numbers');
    }
    return array.slice(a, b + 1); //[a; b] - including b
}

show(array);
show(filterRange(array, 1, 2));

//5
let strings = ["my-short-string", "one-more-example", "and-just-out-of-interest-one-more"];

let camelize = function (str) {
    for (let i = 0, subStr; i < str.length; i++) {
        subStr = str[i].split('');
        for (let j = 0; j < subStr.length; j++) {
            if (subStr[j] !== '-') continue;
            subStr.splice(j, 2, String.fromCharCode(subStr.join('').charCodeAt(j + 1) - 32));
        }
        str[i] = subStr.join('');
    }
    return str;
}
show(strings);
show(camelize(strings));
