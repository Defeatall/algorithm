function aVeryBigSumSingle(num1, num2) {
    // Write your code here
    let num1Str = num1.toString()
    let num2Str = num2.toString()

    while(num1Str.length < num2Str.length) {
        num1Str = '0' + num1Str
    }
    let result = ''
    let carry = 0
    for (let i=num1Str.length - 1; i>=0; i--) {
        const sum = parseInt(num1Str[i], 10) + parseInt(num2Str[i], 10) + carry
        result = (sum%10) + result
        carry = Math.floor(sum/10)
    }
    if (carry > 0) {
        result = carry + result;
    }
    return result;
}


function aVeryBigSum(ar) {
    // Write your code here
    return ar.reduce((a, b) => {
        return aVeryBigSumSingle(a, b)
    })
}

console.log(aVeryBigSum([1,2,3,4]));