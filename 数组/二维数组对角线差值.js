function diagonalDifference(arr) {
    // Write your code here
    let n = arr.length
    let left = 0
    let right = 0
    for(let i=0; i<n; i++) {
        left += arr[i][i]
        right += arr[i][n-i-1]
    }
    // console.log(left, right);
    return Math.abs(left-right)
}

console.log(diagonalDifference([[1,2,3],[1,5,6],[1,8,9]]));
