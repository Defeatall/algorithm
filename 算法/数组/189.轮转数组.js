/**
 *
 * 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
    示例 1:

    输入: nums = [1,2,3,4,5,6,7], k = 3
    输出: [5,6,7,1,2,3,4]
    解释:
    向右轮转 1 步: [7,1,2,3,4,5,6]
    向右轮转 2 步: [6,7,1,2,3,4,5]
    向右轮转 3 步: [5,6,7,1,2,3,4]
    示例 2:

    输入：nums = [-1,-100,3,99], k = 2
    输出：[3,99,-1,-100]
    解释:
    向右轮转 1 步: [99,-1,-100,3]
    向右轮转 2 步: [3,99,-1,-100]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 方法一超出时间限制
var rotate1 = function (nums, k) { // k太大会超出时间限制
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop())
    }
    return nums
};
console.log('rotate1------', rotate1([-1, -100, 3, 99], 2)); // [3, 99, -1, -100]

// 方法二 当k大于数组长度的时候他就不处理了
var rotate2 = function (nums, k) {
    let n = nums.length
    nums.unshift(...nums.splice(n - k, k))
    return nums
};
console.log('rotate2------', rotate2([1, 2], 5)); // 错误输出[1,2]

// 方法三：使用额外的数组newArr，时间复杂度O(n),空间复杂度O(1)
var rotate3 = function (nums, k) {
    let n = nums.length
    let newArr = new Array(n)
    for (let i = 0; i < n; i++) {
        newArr[(i + k) % n] = nums[i]
    }
    for (let i = 0; i < n; i++) {
        nums[i] = newArr[i]
    }
    return nums
}
console.log('rotate3------', rotate3([1, 2], 5)); // [2, 1]
console.log('rotate3------', rotate3([-1, -100, 3, 99], 2)); // [3, 99, -1, -100]

// 方法四：翻转三次，1:全部翻转  2:翻转0到k  3:翻转k到n  注意：k要%n，不然会大于n
var rotate4 = function (nums, k) {
    k %= nums.length
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)
    return nums
}
var reverse = function (nums, start, end) {
    while (start < end) {
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }
}
console.log('rotate4------', rotate4([1, 2], 5)); // [2, 1]
console.log('rotate4------', rotate4([-1, -100, 3, 99], 2)); // [3, 99, -1, -100]
