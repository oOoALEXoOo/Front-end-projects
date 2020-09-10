'use strict';

const obj = {};

Object.defineProperty(obj, 'myProperty', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'Read only',
});

obj.myProperty = 'some value';
console.log(obj.myProperty);