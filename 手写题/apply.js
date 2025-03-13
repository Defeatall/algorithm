function print(name, age, school) {
    console.log(this.skill, name, age, school);
}

const x = {
    skill: 'coding'
}

print.apply(x, ['xiaoming', 18, 'hafoniujin'])

Function.prototype.myApply = function (context) {
    if (typeof this !== 'function') {
        throw new Error('not a function')
    }
    context = context || window
    context.fn = this
    let res = context.fn(...arguments[1])
    delete context.fn
    return res
}
print.myApply(x, ['xiaoming', 18, 'hafoniujin'])