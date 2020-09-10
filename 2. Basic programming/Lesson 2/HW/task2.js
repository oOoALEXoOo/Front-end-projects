let month = +prompt('Write number of month, please');
if (month >= 1 && month <= 12) {
    if (month <= 2 || month == 12) alert('This is winter');
    else if (month >= 3 && month <= 5) alert('This is spring');
    else if (month >= 6 && month <= 8) alert('This is summer');
    else alert('This is autumn');
}
else alert('The number isn\'t in the range from 1 to 12');