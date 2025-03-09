// 只有pending-fulfilled和pending-reject
// new Promise(executor函数，同步).then异步

new Promise((resolve, reject) => reject(3)).catch(err => console.log(err)) // 3
// 等价于
new Promise((resolve, reject) => reject(3)).then(null, (err) => console.log(err)) // 3

// 基于onresolved生成新实例
let p1 = new Promise((resolve, reject) => {
    resolve(3)
})
setTimeout(console.log, 0, p1.then(() => 6)) // 根据onresolved的return值生成fulfilled:6的 promise
setTimeout(console.log, 0, p1.then()) // onresolved为空则延用上一个返回值生成fulfilled:3的promise
setTimeout(console.log, 0, p1.then(() => { })) // 如果返回undefined则生成fulfilled: undefined的promise
p1.then(() => { throw new Error(1) }).catch(err => console.log(err)) // 抛出错误会走到reject

// 基于onrejected生成新实例
let p2 = Promise.reject(3)
setTimeout(console.log, 0, p2.then(null, () => 6)) // onrejected的return值生成fulfilled:6的 promise（和onresolved一致）
p2.then(null, () => Promise.reject()) || p2.then(null) // reject   onrejected返回reject promise或者没有则往后传


