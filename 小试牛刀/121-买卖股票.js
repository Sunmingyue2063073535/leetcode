//输入：[7,1,5,3,6,4]
//输出：5
//解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const arr = [...prices]
    let maxArr=[]
    //先判断如果是越来越小，就返回0
    for(let i=0;i<prices.length;i++){
        for(let j=0;j<i;j++){
            if(prices[j] < prices[j+1]){
                let temp
                temp = prices[j]
                prices[j] = prices[i]
                prices[i] = temp
            }
        }
    }
    //将数组从大到小排序
    if(arr.join('') ===  prices.join(''))  return 0
    // [4,6,2,1,7,4,3,65]
    for (let i =0;i<arr.length;i++){
        let max = 0
        for (let j=0;j<=i;j++){
            if(arr[j] < arr[j+1]){
                max=arr[j+1]-arr[j]
            }
            maxArr.push(max)
        }
    }
     return Math.max(...maxArr)
};
console.log(maxProfit([7,1,5,3,6,4]))