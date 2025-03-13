// 去重
const unique = (arr) => {
    return [...new Set(arr)]
}

// 数组扁平化：多层数组拍成一层[1,[2],[3, [4,5]]] [1,2,3,4,5]
// 循环
const flatten = (arr) => {
    while (arr.some(e => Array.isArray(e))) {
        arr = [].concat(...arr)
    }
    return arr
}
console.log(flatten([1, [2], [3, [4, 5]]])); // [1,2,3,4,5]

// 递归
const flatten2 = (arr) => {
    return arr.reduce((prev, next) => {
        return prev.concat(Array.isArray(next) ? flatten2(next) : next)
    }, [])
}
console.log(flatten2([1, [2], [3, [4, 5]]])); // [1,2,3,4,5]
