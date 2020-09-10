function getTodayDate() {
    document.getElementById('todayDate').textContent = moment().toString();
}
getTodayDate();

function getNow() {
    document.getElementById('nowDate').textContent = moment(undefined);
}
getNow();

function parseStringDate(stringValue) {
    let parsedDate = moment(stringValue);

    if (parsedDate.isValid()) {
        document.getElementById('parsedDate').textContent = parsedDate;
    }
}
parseStringDate('1990-11-29 22:12:35');

function parseStringDateWithDiffFormats(stringValue) {
    let parsedDate = moment(stringValue, ['MM-DD-YYYY', 'DD-MM', 'DD-MM-YYYY']);

    if (parsedDate.isValid()) {
        document.getElementById('parsedDateWithDiffFormats').textContent = parsedDate;
    }
}
parseStringDateWithDiffFormats('25-09-2020');

function parseDateWithArray(dateArray) {
    let parsedDate = moment(dateArray);

    if (parsedDate.isValid()) {
        document.getElementById('parsedDateWithArray').textContent = parsedDate;
    }
}
parseDateWithArray([1999, 11, 9, 10, 23, 39]);

function parseDateWithObject(dateObject) {
    let parsedDate = moment(dateObject);

    if (parsedDate.isValid()) {
        document.getElementById('parsedDateWithObject').textContent = parsedDate;
    }
}
parseDateWithObject({
    year: 2011,
    month: 9,
    day: 12,
    hour: 16,
    minute: 23,
    second: 40
});

function formatDate() {
    let parsedDate = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

    if (parsedDate) {
        document.getElementById('formattedDate').textContent = parsedDate;
    }
}
formatDate();

function getSetDate() {
    let todayDate = moment();

    let year = todayDate.get('year');
    let month = todayDate.get('month');
    let date = todayDate.get('date');
    let hour = todayDate.get('hour');
    let minute = todayDate.get('minute');
    let second = todayDate.get('second');
    let millisecond = todayDate.get('millisecond');

    console.log(year + ', ' + month + ', ' + date + ', ' + hour + ', ' + minute + ', ' + second + ', ' + millisecond);

    todayDate.set('year', 2205);

    year = todayDate.get('year');
    console.log(year + ', ' + month + ', ' + date + ', ' + hour + ', ' + minute + ', ' + second + ', ' + millisecond);

}
getSetDate();