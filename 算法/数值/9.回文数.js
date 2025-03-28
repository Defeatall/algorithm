/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

    回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

    例如，121 是回文，而 123 不是。
    

    示例 1：

    输入：x = 121
    输出：true
    示例 2：

    输入：x = -121
    输出：false
    解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
    示例 3：

    输入：x = 10
    输出：false
    解释：从右向左读, 为 01 。因此它不是一个回文数。
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false
    return reverse(x) === x
};
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