// package.json type是esmodule才可以用
import { counter, incCounter } from './a.js';
console.log(counter); // 3
incCounter();
console.log(counter); // 4

import { counter as counter2, incCounter as incCounter2 } from './b.cjs'; // commomjs和esm共用
console.log(counter2);
incCounter2();
console.log(counter2);




