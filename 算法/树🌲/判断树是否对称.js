var isSymmetric = function(root) {
    // 定义递归方法和入口
    // 1. 传入的left或right同时为null。2.left和right都不为空时且相等时，继续递归判断left和right的儿子。
    if (!root) {
        return true
    }
    const isMirror = (l, r) => {
        if (!l && !r) {
            return true
        }
        if (l && r && l.val === r.val && isMirror(l.left, r.right) && isMirror(l.right, r.left)) {
            return true
        }
        return false
    }
    return isMirror(root.left, root.right)
};