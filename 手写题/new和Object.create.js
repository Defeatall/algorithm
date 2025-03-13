/**
 * 1.创建一个对象
 * 2.链接到原型
 * 3.绑定this
 * 4.如果构造函数返回值是对象则直接返回，否则返回创建的对象
 */

const myNew = (fn, arg) => {
    let instance = {}
    instance.__proto__ = fn.prototype
    let res = fn.apply(instance, arg)
    return typeof res === 'object' ? res : instance
}

/**
 * object.create,接收一个prototype给新对象的__proto__（适合创建纯净的对象）
 */
const myCreate = (proto) => {
    const fn = () => { }
    fn.prototype = proto
    return new fn()
}