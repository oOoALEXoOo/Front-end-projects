'use strict';
//
// const obj1 = {
//   word: 'Hello',
//   say: function () {
//     console.log(this.word);
//   },
// };
//
// const obj2 = {
//   word: 'Hey!',
// };
//
// obj2.say = obj1.say;
// // obj2.say();
//
// const say = obj1.say;
// say.bind(obj2)();

function Obj() {
  const self = this;

  self.hello = 'hello';

  self.sayHello = function () {
    console.log(self.hello);
  };

  self.delayHello = function () {
    setTimeout(self.sayHello, 1000);
  };
}

const myObj = new Obj();
myObj.delayHello();