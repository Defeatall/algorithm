// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

// min(左,右) * (右Index - 左Index)的最大值

// 最优：双指针
var maxArea = function (height) {
    let left = 0
    let right = height.length - 1
    let ans = []
    while (left < right) {
        ans.push(Math.min(height[left], height[right]) * (right - left))
        if (height[left] > height[right]) {
            right--
        } else {
            left++
        }
    }
    return Math.max(...ans)
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
