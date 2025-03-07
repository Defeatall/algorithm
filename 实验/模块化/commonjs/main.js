// main.js
console.log(require('./a.js')); // 导出对象   { counter: 3, incCounter: [Function: incCounter] } 第一次require就把该对象缓存起来了

var counter = require('./a.js').counter;
var incCounter = require('./a.js').incCounter;

console.log(counter);  // 3
incCounter();
console.log(counter); // 3 无法改变拷贝的值
counter += 1
console.log(counter); // 4 引入后才可以改变


// let uniq = require('uniq')
// let module1 = require('./modules/module1')
// let module2 = require('./modules/module2')
// let module3 = require('./modules/module3')
// 同步执行按顺序输出uniq、module1、module2、module3