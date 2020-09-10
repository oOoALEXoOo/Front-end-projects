function show(data) {
    console.log(data);
}

function* range(min, max) {
    for (let i = Math.ceil(min); i <= max; i++) {
        yield i;
    }
}

let arrayOfData = [...range(5,47)];

show(arrayOfData);

// for (let n in range(10, 20)) {
//     show(n);
// }