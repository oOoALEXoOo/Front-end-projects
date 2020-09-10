let express = require("express");
let bodyParser = require("body-parser");

let server = express();
let jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function (request, response) {
    console.log('lesson 16 server is started!');
    response.send("<h1>Welcome to lesson 16 regarding AJAX</h1>");
});

server.get('/userGet', function (request, response) {
    console.log(request.query);

    let obj = request.query;
    obj.userName = 'Jackie -> Get';
    obj.userAge = 38;

    response.send('You have successfully used Get method' +
        JSON.stringify(obj));
});

server.post('/userPost', function (request, response) {
    console.log(request.body);

    let obj = request.query;
    obj.userName = 'Robert -> Post';
    obj.userAge = 46;

    response.send('You have successfully used Post method' +
        JSON.stringify(obj));
});

server.listen(3001);