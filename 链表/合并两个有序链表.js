// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]

// 方法一：递归
// 时间复杂度：O(m+n)
// 空间复杂度：O(m+n)
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};
// 方法二：迭代
// 时间复杂度：O(m+n)
// 空间复杂度：O(1)
var mergeTwoLists = function (l1, l2) {
    const prev = new ListNode(-1);
    while (l1.val !== null && l2.val !== null) {
        if (l1.val <= l2.val) {
            prev.next = l1
            l1 = l1.next
        } else {
            prev.next = l2
            l2 = l2.next
        }
        prev = prev.next
    }
    prev.next = l1 === null ? l2 : l1  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
    return prev.next
};