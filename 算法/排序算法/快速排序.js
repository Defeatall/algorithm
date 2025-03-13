var quickSort = function (arr) {
    if (arr.length <= 1) { return arr }
    var pivotIndex = Math.floor(arr.length / 2)
    var pivot = arr.splice(pivotIndex, 1)[0]
    var left = []
    var right = []
    arr.forEach(e => {
        if (e < pivot) {
            left.push(e)
        } else {
            right.push(e)
        }
    })
    return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort([1, 5, 2, 4, 1, 7, 1, 4, 7, 3, 6, 83, 57, 83, 141, 234, 5, 11, 44, 22]))