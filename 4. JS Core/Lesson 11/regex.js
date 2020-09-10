function show(data) {
    console.log(data);
}

let regexPattern = new RegExp('Java', 'gi');
let text = 'What is java in the modern world? Java is one of the coolest languages in the world.' +
           ' But nowadays JavaScript is the most popular languages in the world';
let result = null;

while ((result = regexPattern.exec(text)) !== null) {
    show(result[0] + ' on the index ' + result.index);
}

show(regexPattern.test(text));