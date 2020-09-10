function evaluateClock() {
    let clockElement = document.getElementById('clock');
    let timeNow = new Date();

    clockElement.innerHTML = timeNow.toDateString();
}

function factorial(n) {
    if (n <= 1) return n;
    return n * factorial(n - 1);
}

evaluateClock();

document.write('<table>');
document.write('<tr><th>n</th>><th>n!</th></tr>');

for (let i = 1; i <= 10; i++) {
    document.write('<tr><td>' + i + '</td><td>' + factorial(i) + '</td></tr>');
}
document.write('</table>');
