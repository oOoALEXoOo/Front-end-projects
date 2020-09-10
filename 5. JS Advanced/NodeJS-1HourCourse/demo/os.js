const os = require('os');

console.log('Operating system: ', os.platform())

console.log('Processor architecture: ', os.arch())

console.log('Pr info: ', os.cpus())

console.log('Free memory: ', os.freemem())

console.log('All memory: ', os.totalmem())

console.log('Home directory: ', os.homedir())

console.log('Enable time: ', os.uptime())