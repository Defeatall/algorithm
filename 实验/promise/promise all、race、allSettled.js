/**Promise.all 用于将多个实例合并成一个 */
Promise.all([ // 直接console会输出pending的promise，需要用.then(获取)
    Promise.resolve(3),
    Promise.resolve(6),
    4
]).then(res => console.log(res)) // [3,6,4]

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(123)
    }, 1000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(456)
    }, 3000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(456)
    }, 5000)
})
Promise.all([p1, p2]).then(res => { // 全部的promise状态改变才会走到下一步，全部fulfilled才会到被onResolve函数捕获，否则走到onreject
    console.log(res); // 3s后输出[123, 456]
})

Promise.race([p1, p2]).then(res => { // 只要有一个状态改变都会走到下一步 
    console.log(res); // 1s后输出123
})

Promise.allSettled([p1, p2, p3]).then(res => { // 全部状态改变了才到下一步
    console.log(...res); // {status: 'fulfilled', value: 123} {status: 'fulfilled', value: 456} {status: 'rejected', reason: 456}
})
