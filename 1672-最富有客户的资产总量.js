// 输入： accounts = [[1, 2, 3],[3, 2, 1]]
// 输出： 6
// 解释：
// 第 1 位客户的资产总量 = 1 + 2 + 3 = 6
// 第 2 位客户的资产总量 = 3 + 2 + 1 = 6
// 两位客户都是最富有的， 资产总量都是 6， 所以返回 6
function maxFrsh(arr) {
    const newArr=[]
    arr.forEach(item => {
        let sum = 0
        item.forEach( ele => {
            sum += ele
        })
        newArr.push(sum)
    })
    return Math.max.apply(null, newArr)
}

console.log(maxFrsh([[1,2,3],[3,2,1]]))