function show(data) {
    console.log(data);
}
//1
function myFunct(str) {
    return String(str[0]).toUpperCase().concat(str.slice(1));
}

let name1 = 'yura';
let name2 = 'silvester';

show(myFunct(name1));
show(myFunct(name2));

//2
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.substring(0, maxlength - 3).concat("...");
    }
    return str;
}

show(truncate("A long time ago in a galaxy far far away", 20));
show(truncate("Hello guys", 10));

//3
function extractCurrencyValue(str) {
    let number = '';
    for (let charInd = 0; charInd < str.length; charInd++) {
        if (str[charInd] < '0' || str[charInd] > '9') continue;
        for (let numbInd = charInd; str[numbInd] >= '0' && str[numbInd] <= '9'; numbInd++) {
            number += str[numbInd];
        }
        break;
    }
    return +number;
}

show(extractCurrencyValue("$ 120"));
show(extractCurrencyValue("Cinema ticket cost 20$ for film..."));