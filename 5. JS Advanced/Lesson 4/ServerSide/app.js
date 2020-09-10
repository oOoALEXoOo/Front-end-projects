const myModule = require('./my-module');

console.log(`Server listen on port: ${process.env.PORT}`);
console.log(myModule.hello);
