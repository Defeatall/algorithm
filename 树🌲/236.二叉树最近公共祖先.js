// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
// 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// 输出：3
// 解释：节点 5 和节点 1 的最近公共祖先是节点 3 。

// 只要满足左子树有q(p)节点，右子树有p(q)节点 || 左右等于p或q && 左右儿子包含p或q
// (f 
// flson && frson || ((x == p || x == q) && (flson || frson))

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 方法一，递归
// 时间复杂度： O(n)
// 空间复杂度： O(n)
var lowestCommonAncestor = function(root, p, q) {
    let ans;
    const dfs = (root, p, q) => {
        if (root === null) return false
        let lson = dfs(root.left, p, q)
        let rson = dfs(root.right, p, q)
        if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
            ans = root
        }
        return lson || rson || (root.val === p.val || root.val === q.val)
    }
    dfs(root, p, q)
    return ans
};
