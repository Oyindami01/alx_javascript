#!/usr/bin/node

const util = require('util');
const myObject = {
  type: 'object',
  value: 12,
  incr: function () {
    this.value++;
  }
};

console.log(util.inspect(myObject, { showHidden: false, depth: null }));

myObject.incr();
console.log(util.inspect(myObject, { showHidden: false, depth: null }));

myObject.incr();
console.log(util.inspect(myObject, { showHidden: false, depth: null }));

myObject.incr();
console.log(util.inspect(myObject, { showHidden: false, depth: null }));