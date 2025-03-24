/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

    如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

    假设环境不允许存储 64 位整数（有符号或无符号）。
    

    示例 1：

    输入：x = 123
    输出：321
    示例 2：

    输入：x = -123
    输出：-321
    示例 3：

    输入：x = 120
    输出：21
    示例 4：

    输入：x = 0
    输出：0
 */

/**
 * @param {number} x
 * @return {number}
 */
// Math.floor像下取整  ～～ 向0取整，比如
// Math.floor(12.5) // -12
// ~~(12.5) // -12

// Math.floor(-12.5) // -13
// ~~(-12.5) // -12
var reverse = function (x) {
   let rev = 0
   while (x != 0) {
      let final = x % 10
      x = ~~(x / 10)
      rev = rev * 10 + final
      if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
         return 0
      }
   }
   return rev
};

console.log(reverse(123345));
