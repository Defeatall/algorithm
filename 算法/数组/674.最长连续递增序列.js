// 给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。

// 输入：nums = [1,3,5,4,7]
// 输出：3
// 解释：最长连续递增序列是 [1,3,5], 长度为3。
// 尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。 

/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一：贪心算法（居然说这是贪心算法，评论说局部最优就是全局最优的话就是贪心）
var findLengthOfLCIS = function(nums) {
    let ans = 0
    let start = 1
    for(let i = 1; i<nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            start ++
        } else {
            start = 1
        }
        ans = Math.max(ans, start)
    }
    return ans
};
console.log(findLengthOfLCIS([1,3,5,4,7]));

// 方法二：动态规划 初始化数组dp,每个索引所对应的值均为1。
// 从索引 0 的位置开始遍历，若后一个元素 大于 前一个元素，则 dp[i] = dp[i - 1] + 1;
// 递减则不做任何操作,相当于dp[i] = 1。
// 循环结束，dp = [1, 2, 3, 1, 2, 3, 4, 1]，取最大值4。

var findLengthOfLCIS2 = function(nums) {
    const dp = new Array(nums.length).fill(1)
    for (let i=0; i<nums.length; i++) {
        if (nums[i] > nums[i-1]) {
            dp[i] = dp[i - 1] + 1
        }
    }
    return Math.max(...dp)
};
console.log(findLengthOfLCIS2([1,3,5,4,7]));