console.log(Promise.resolve(3)) // 初始化一个fulfilled为3的promise实例
console.log(new Promise((resolve) => resolve(3))) // 等同于Promise.resolve(3)
/**
    try {
        console.log(Promise.reject(4)) // 初始化一个fulfilled为4的promise实例， 并抛出一个错误
    } catch (err) {
        console.log(err) // catch捕获不到因为只能捕获同步代码报错
    }
*/
Promise.reject(4).catch(err => { // 只能用promise.catch来捕获
    console.log(err); // 4
})
//等同于new Promise((resovle, reject) => {reject()})


// Promise.resolve和Promise.reject使用场景：

// 1.将非 Promise 值转换为 Promise
Promise.resolve(3)

// 2.延续链式操作
Promise.resolve(3).then(res => {
    return res + 1
}).then(res => {
    return Promise.resolve(res + 1)
}).then(res => {
    console.log(res); // 5
})

// 3.一个函数内同步和异步统一
function maybeAsync(value) {
    if (typeof value === 'number') {
        return Promise.resolve(value * 2); // 同步逻辑
    } else {
        return fetch('https://api.example.com/data'); // 异步逻辑
    }
}
