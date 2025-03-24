// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 方法一：DFS深度优先
const minDepth = (root) => {
    if (root == null) {
        return 0
    }
    if (root.left && root.right) {
        return 1 + Math.min(minDepth(root.left), minDepth(root.right))
    } else if (root.left) {
        return 1 + minDepth(root.left)
    } else if (root.right) {
        return 1 + minDepth(root.right)
    } else {
        return 1
    }
};

// 方法二：BFS广度优先
const minDepthBFC = (root) => {
    if (root === null) return 0
    const queue = [root]
    let depth = 1
    while (queue.length) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const cur = queue.shift()
            if (cur.left == null && cur.right == null) return depth
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
        depth++
    }
};