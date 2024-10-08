function myInstanceof(left, right) {
    left = left.__proto__
    let prototype = right.prototype
    while(true) {
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
