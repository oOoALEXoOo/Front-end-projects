const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (error) => {
//   if (error) {
//     throw error;
//   }
//
//   console.log('Dir is created');
// });

const filePath = path.join(__dirname, 'test', 'text.txt');

// fs.writeFile(filePath, 'Hello NodeJS', err => {
//   if (err) {
//     throw err
//   }
//
//   console.log('File is created');
// });
//
// fs.appendFile(filePath, '\nHello Again', err => {
//   if (err) {
//     throw err
//   }
//
//   console.log('File is created');
// });

fs.readFile(filePath, 'utf-8', ((err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
}));