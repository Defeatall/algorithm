function combinationSum(candidates, target) {
    const resArr = [];
    function backTracking(
        candidates, target,
        startIndex, route, curSum
    ) {
        if (curSum > target) return;
        if (curSum === target) {
            resArr.push(route.slice());
            return
        }
        for (let i = startIndex, length = candidates.length; i < length; i++) {
            let tempVal = candidates[i];
            route.push(tempVal);
            backTracking(candidates, target, i, route, curSum + tempVal);
            route.pop();
        }
    }
    backTracking(candidates, target, 0, [], 0);
    return resArr;
};

console.log(combinationSum([2, 5, 3]));