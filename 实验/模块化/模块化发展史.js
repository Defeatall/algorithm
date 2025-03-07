/**
 * 全局function，污染全局命名空间，看不出关联关系
 */
function m1() { }
function m2() { }

/**
 * 全局namespace，解决了命名冲突，但外部可以修改内部数据
 */
let myModule = {
    data: 'www.baidu.com',
    foo() {
        console.log(`foo() ${this.data}`)
    },
    bar() {
        console.log(`bar() ${this.data}`)
    }
}
myModule.data = 'other data' //能直接修改模块内部的数据
myModule.foo() // foo() other data

