function reWriteDom() {
    $(document).ready(function () {
        document.write('Hello on lesson 18 jQuery');
    });
}

$(document).ready(function () {
    $('#myCustomDiv').click(function () {
        alert('You have clicked on custom element');
    });
});

setTimeout(() => {
    $('#langs').append('<li>C++</li>');
}, 2000);

setTimeout(() => {
    let listItem = document.createElement('li');
    listItem.textContent = 'JavaScript';
    $('#langs').append(listItem);
}, 3000);

setTimeout(() => {
    let listItem = $('<li>Visual Basic</li>');
    $('#langs').append(listItem);
}, 3500);

setTimeout(() => {
    let listItem = $('<li>Scala</li>');
    $('#langs').prepend(listItem);
}, 4000);

setTimeout(() => {
    $('<span> is the most popular languages</span>').appendTo($('#java'));
}, 4000);

setTimeout(() => {
    $('#langs').wrap('<div id="wrapper" style="color: red"></div>');
}, 2500);

// setTimeout(() => {
//     $('li:even').remove();
// }, 5000);

let firstListItem = $('li:first');

setTimeout(() => {
    firstListItem.detach();
}, 5000);
setTimeout(() => {
    $('#langs').append(firstListItem);
}, 8000);

setTimeout(() => {
    $('#langs').empty();
}, 10000);