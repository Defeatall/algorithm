// 一、1.两数之和
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

// 方法1 暴力枚举,记得j的初始值是i+1
// 时间复杂度O(n平方)
// 空间O(1)
var twoSum1 = function(nums, target) {
    for(let i = 0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
}
// console.log(twoSum1([2,7,11,15], 9));

// 方法2 哈希表 因为查找target-x复杂度高，哈希表可以将target-x的时间复杂度从O(n)降低到O(1)

var twoSum2 = function(nums, target) {
    const obj = {}
    for(let i = 0; i<nums.length; i++) {
        if (obj[target - nums[i]] || obj[target - nums[i]] === 0) {
            return [i, obj[target - nums[i]]]
        } else {
            obj[nums[i]] = i
        }
    }
}
// console.log(twoSum2([2,7,11,15], 9));

// 二、167.有序的两数之和，和上面一样，就是有序
// 以上暴力解法和哈希表都可用，但没有用上有序的特性。

// 方法1 双指针
// 前后两个指针，两指针指向的数之和大于target，右指针左移动。小于target，左指针右移
var twoSum3 = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while(left < right) {
        if (nums[left] + nums[right] > target) {
            right--
        } else if (nums[left] + nums[right] < target) {
            left++
        } else {
            return [left, right]
        }
    }
}
// console.log(twoSum3([2,8,11,15,17,18,19,21,22.3,33,44,55], 40));