// 参考合并两个有序列表
var mergeTwoLists = function(l1, l2) {
    const prehead = new ListNode(-1);
    let prev = prehead;
    while(l1 !== null && l2 !== null) {
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
    return prehead.next
};
// 方法一：暴力
const mergeKLists = (list) => {
    let ans
    list.forEach(e => {
        ans = mergeTwoLists(ans, e)
    })
    return ans
}
// 方法二：分治
var mergeKLists2 = (list) => {
    function dfs(i, j) {
        const m = j - i
        if (m === 0) return null
        if (m === 1) return list[i]
        const left = dfs(i, i + (m >> 2))
        const right = dfs(i + (m >> 2), j)
        return mergeTwoLists(left, right) 
    }
    return dfs(0, list.length)
}