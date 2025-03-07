/**
 * IFEE匿名函数自己调用（闭包）
 */

// module.js文件
(function () {
    let data = 'www.baidu.com'
    //操作数据的函数
    function foo() {
        //用于暴露有函数
        console.log(`foo() ${data}`)
    }
    function bar() {
        //用于暴露有函数
        console.log(`bar() ${data}`)
        otherFun() //内部调用
    }
    function otherFun() {
        //内部私有的函数
        console.log('otherFun()')
    }
    //暴露行为
    myModule = { foo, bar } //ES6写法
})()

myModule.foo() // foo() www.baidu.com
myModule.bar() // bar() www.baidu.com   otherFun()
console.log(myModule.data) //undefined 不能访问模块内部数据
myModule.data = 'xxxx' //不是修改的模块内部的data
myModule.foo() // foo() www.baidu.com

/**
如何增强依赖（函数自调用时候传入）
(function () {
})(Jquery)


<script type="text/javascript" src="jquery-1.10.1.js"></script>
<script type="text/javascript" src="module.js"></script> 顺序记好
<script type="text/javascript">
  myModule.foo()
</script>
 */


// 总结：
// 1.依赖模糊
// 2.请求过多
// 3.难以维护