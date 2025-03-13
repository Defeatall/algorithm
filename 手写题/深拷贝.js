function deepCopy(params) {
    if (typeof params !== 'object') return params
    let obj = {}
    if (params instanceof Array) {
        obj = []
    }
    for (let key in params) {
        if (params.hasOwnProperty(key)) {
            obj[key] = deepCopy(params[key])
        }
    }
    return obj
}
let obj1 = {
    x: 1,
    y: {
        x: 1,
        y: {
            x: 1,
            y: 2
        }
    }
}
let obj2 = deepCopy(obj1)
obj2.x = 11111
console.log(JSON.stringify(obj1), JSON.stringify(obj2)); // {"x":1,"y":{"x":1,"y":{"x":1,"y":2}}} {"x":11111,"y":{"x":1,"y":{"x":1,"y":2}}}
