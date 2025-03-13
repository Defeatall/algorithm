function print(name, age, school) {
    console.log(this.skill, name, age, school);
}

const x = {
    skill: 'coding'
}

const fn1 = print.bind(x, 'xiaoming')

fn1(18, 'hafoniujin')

Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new Error('not a function')
    }
    context = context || window
    _this = this
    const args = [...arguments].slice(1)
    return function fn() {
        return _this.apply(context, [...args, ...arguments])
    }
}
const fn2 = print.myBind(x, 'xiaoming')
fn2(18, 'hafoniujin')