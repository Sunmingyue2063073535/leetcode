// 输入：nums = [1,2,3,4]
// 输出：[1,3,6,10]
// 解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。
//思路，循环这个数组，利用累加给数组赋值
function runningSum(arr) {
    const newArr = []
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        newArr.push(sum)
    }
    return newArr
}
console.log(runningSum([1, 2, 3, 4]))