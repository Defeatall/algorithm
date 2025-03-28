// 输入：nums = [0,0,1,1,1,2,2,3,3,4]
// 输出：5, nums = [0,1,2,3,4]
// 解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。

// 输入：nums = [1,1,2]
// 输出：2, nums = [1,2,_]
// 解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一：快慢指针(一句话:fast正常速度遍历，当遍历到的数比前一个数大的时候，slow才加一，多少个递增的数slow就是多少)
var removeDuplicates = function (nums) {
    if (nums.length == 0) return 0
    let slow = 1
    let fast = 1
    while (fast < nums.length) {
        if (nums[fast] > nums[fast - 1]) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    console.log(slow, nums);
    return slow
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])

// slow1 fast1 
// slow1 fast2
// slow2 fast3
// slow2 fast4
// slow2 fast5