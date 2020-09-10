let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

$(document).ready(() => {
    months.reduce((promise, month) => {
        return promise.then(() => {
            return new Promise(resolve => {
                setTimeout(() => resolve($('ol').append(`<li>${month}</li>`)), 1000);
            });
        });
    }, Promise.resolve())
        .then(() => setTimeout(() => $('li:odd').css('color', 'red'), 1000));
});