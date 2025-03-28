/**
    示例 1：
    输入：nums = [1,1,1,2,2,3]
    输出：5, nums = [1,1,2,2,3]
    解释：函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3。 不需要考虑数组中超出新长度后面的元素。

    示例 2：
    输入：nums = [0,0,1,1,1,1,2,3,3]
    输出：7, nums = [0,0,1,1,2,3,3]
    解释：函数应返回新长度 length = 7, 并且原数组的前七个元素被修改为 0, 0, 1, 1, 2, 3, 3。不需要考虑数组中超出新长度后面的元素。
 */

var removeDuplicates = function (nums) {
    let fast = 2
    let slow = 2
    while (fast < nums.length) {
        if (nums[fast] !== nums[slow - 2]) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
};

console.log(removeDuplicates([0, 0, 1, 1, 2, 3, 3]))