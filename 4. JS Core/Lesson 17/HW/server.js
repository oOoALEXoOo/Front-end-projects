let express = require("express");
let bodyParser = require("body-parser");

let server = express();
let jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.post('/user-data', function (request, response) {
    console.log("Form received by server.");

    let obj = request.body;

    obj.email = obj.firstName + obj.lastName + '@gmail.com';

    response.send(obj.email);
});

server.listen(3001);