function show(data) {
    console.log(data);
}

function rangeData(min, max) {
    let nextValue = Math.round(min);

    return {
        next: function () {
            if (nextValue > max) throw RangeError;

            return nextValue++;
        }
    };
}

let range = rangeData(10, 25);

while (true) {
    try {
        show(range.next());
    } catch (e) {
        if (e === RangeError) break;
    }
}