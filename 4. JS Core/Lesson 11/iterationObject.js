function show(data) {
    console.log(data);
}

let range = {
    from: 10,
    to: 25
};

range[Symbol.iterator] = function () {
    let current = this.from;
    let last = this.to;

    return {
        next: function() {
            if (current <= last) {
                return { done: false, value: current++ };
            } else {
                return { done: true };
            }
        }
    };
};

for (let number of range) {
    show(number);
}