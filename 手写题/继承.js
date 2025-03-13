// 组合继承：借用构造函数继承实例方法，原型继承原型方法
function parent() {
    this.x1 = 1 // 实例方法
}
parent.prototype.x2 = 2 // 原型方法
console.log(new parent().x1) // 1
console.log(new parent().x2) // 2

function child1(value) { // 借用构造函数继承
    parent.call(this, value)
}
function child2(value) {

}
console.log(new child1().x1) // 1
console.log(new child1().x2) // undefined 借用构造函数继承无法继承protoype上的属性

// 原型继承和借用构造函数继承组合（缺点：替换了子类prototype）
child1.prototype = new parent() // child1.prototype.__proto__ = parent.prototype
console.log(new child1().x1) // 1
console.log(new child1().x2) // 2


child2.prototype = Object.create(parent.prototype) // 只继承prototype，和原型继承区别是原型继承把实例属性也继承了
console.log(new child2().x1) // undefined
console.log(new child2().x2) // 2
