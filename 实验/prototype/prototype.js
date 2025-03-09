// __proto__和constructor是对象(对象、函数、数组)独有的，prototype是函数(构造函数)独有的
// 个人见解: 构造函数把所有可以继承的东西放prototype上，传到儿子的__proto__上，比如 child.x会在child.x——child.__proto__.x——child.__proto__.__proto__一直找下去

//所有函数的__proto__都会指向Function.prototype
console.log(Function.__proto__ === Function.prototype); // true 

// Function是对象的一种，Object也是构造函数
console.log(Function instanceof Object); // true
console.log(Object instanceof Function); // true

function Person() { }
let curry = new Person()

// 人名实例和他的构造函数的关系
console.log(curry.__proto__ === Person.prototype && curry.constructor === Person) // true
// 构造函数和Function的关系
console.log(Person.__proto__ === Function.prototype && Person.constructor === Function); // true
// Object和Function之前的关系
console.log(Object.__proto__ === Function.__proto__ === Function.prototype) // true
// Object自身的关系
console.log(Object.__proto__.__proto__ === Object.prototype); // true


// curry -> __proto__ 
// -> Person.prototype -> __proto__ 
// ->Object.prototype ->__proto__
// ->null

