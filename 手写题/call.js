let obj1 = {
    x: 1
}
let obj2 = {
    x: 2
}
function printMsg(value) {
    console.log(this.x, value);
}
printMsg.call(obj1, 'test') // 1 test
printMsg.call(obj2, 'test') // 2 test


Function.prototype.myCall = function (context) {
    if (typeof this !== 'function') return
    context.fn = this
    const args = [...arguments].slice(1)
    let res = context.fn(...args)
    delete context.fn
    return res
}
function printMsg2(value) {
    console.log(this.x, value);
}
printMsg2.myCall(obj2, 'test') // 2 test