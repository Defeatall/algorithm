function myInstanceof(left, right) {
    left = left.__proto__
    let prototype = right.prototype
    while (true) {
        if (left == undefined || left == null) {
            return false
        }
        if (left == prototype) {
            return true
        }
        left = left.__proto__
    }
}

console.log(myInstanceof(new Array(1), Array));


// 子的proto = 父的prototype
// 孙的proto = 子的prototype
// 孙的proto和爷的prototype比较，不一样，则去孙的proto的proto中找