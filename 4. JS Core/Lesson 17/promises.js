function fulfilledPromise() {
    let fulfilledPromise = new Promise(function (resolve, reject) {

        //simulation of server call with 3 seconds delay
        setTimeout(() => resolve('Promise from Example is successful'), 3000);
    });

    fulfilledPromise.then(
        function (result) {
            console.log('Fulfilled & resolved promise: ' + result);
        }, function (error) {
            console.log('Rejected promise: ' + error);
        });
}

function rejectedPromise() {
    let rejectedPromise = new Promise(function (resolve, reject) {

        //simulation of failed server call
        setTimeout(() => reject('Time is out, server call is very long!'), 3000);
    });

    rejectedPromise.then(
        function (result) {
            console.log('Fulfilled & resolved promise: ' + result);
        }, function (error) {
            console.log('Rejected promise: ' + error);
        });
}

fulfilledPromise();
rejectedPromise();