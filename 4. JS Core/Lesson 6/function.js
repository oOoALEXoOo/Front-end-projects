function show(data) {
    console.log(data);
}

// show({to: 'go'});
//
// let calculator = {
//     add: function (a,b) {
//         return a + b;
//     },
//     subtract: function (a,b) {
//         return a - b;
//     },
//     multiply: function (a,b) {
//         return a * b;
//     },
//     divide: function (a,b) {
//         return a / b;
//     },
// }
//
// function generalCalculation(operation, op1, op2) {
//     return operation(op1,op2);
// }
//
// let result_1 = generalCalculation(calculator.add, 6, 2);
// show(result_1);
// let result_2 = generalCalculation(calculator.subtract, 6, 2);
// show(result_2);
// let result_3 = generalCalculation(calculator.multiply, 6, 2);
// show(result_3);
// let result_4 = generalCalculation(calculator.divide, 6, 2);
// show(result_4);
//
// let result_5 = generalCalculation(calculator.multiply,
//                                   generalCalculation(calculator.add, 4,2),
//                                   generalCalculation(calculator.divide, 12, 4));
// show(result_5);

//closures

function counter() {
    let count = 0;
    return {
        evaluate: function () { return count++; },
        reset: function () { count = 0; }
    }
}

// let obj_fn_1 = counter();
// let obj_fn_2 = counter();
//
// show(obj_fn_1.evaluate());
// show(obj_fn_2.evaluate());
//
// show(obj_fn_1.evaluate());
// show(obj_fn_2.evaluate());
//
// obj_fn_1.reset();
//
// show(obj_fn_1.evaluate());
// show(obj_fn_2.evaluate());

//functionApi
//.length

show((function (a) {}).length);
show((function (a,b,c) {}).length);

//apply() call()

let person = {
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

let person1 = {
    firstName: 'John',
    lastName: 'William'
}

show(person.getFullName.apply(person1));
show(person.getFullName.call(person1));

show((function (test) {return test;}).toString());
