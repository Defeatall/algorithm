// 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

// 输入：head = [1,2,2,1] 输出：true

// 输入：head = [1,2] 输出：false

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function(head) {

// };

// 方法一：将链表值复制到数组中后，用双指针法
// 时间复杂度分析：加入vals数组O(n)，遍历O(n/2)即O(n)，加起来O(2n)即O(n)
// 空间复杂度分析：存在数组中O(n)
var isPalindrome1 = function (head) {
    const vals = []
    while (head !== null) {
        vals.push(head)
        head = head.next
    }
    for (let i = 0, j = head.length - 1; i < j; ++i, --j) {
        if (vals[i] !== vals[j]) return false
    }
    return true
};
// 方法二：利用链表的后续遍历，使用函数调用栈作为后续遍历栈来判断是否回文。
let frontPointer;

const recursivelyCheck = (currentNode) => { // 执行则进栈
    if (currentNode !== null) {
        if (!recursivelyCheck(currentNode.next)) return false // 出栈
        if (currentNode.val !== frontPointer.val) return false // 出栈
        frontPointer = currentNode.next
    }
    return true
}
var isPalindrome2 = function (head) {
    frontPointer = head
    return recursivelyCheck(head)
};

let frontPointer;
const recursivelyCheck = (currentNode) => {
    if (currentNode !== null) {
        if (!)
    }
}
// 方法三：用快慢指针遍历
/*
1.找到前半部分链表的尾节点。
2.反转后半部分链表。
3.判断是否回文。
4.恢复链表。
5.返回结果。
*/

const reverseList = (head) => {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let nextTemp = curr.next
        curr.next = prev
        prev = curr
        curr = nextTemp
    }
    return prev
}

const endOfFirstHalf = (head) => {
    let fast = head
    let slow = head
    while (fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}

const isPalindrome3 = (head) => {
    if (head == null) return true
    // 找到前半部分链表尾节点并反转后半部分链表
    const firstHalfEnd = endOfFirstHalf(head)
    const secondHalfStart = reverseList(firstHalfEnd.next)

    // 判断是否回文
    let p1 = head
    let p2 = secondHalfStart
    let result = true
    while (result && p2 !== null) {
        if (p1.val != p2.val) result = false
        p1 = p1.next
        p2 = p2.next
    }
    // 还原链表并返回结果
    firstHalfEnd.next = reverseList(secondHalfStart)
    return result
}




