/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // 1,2,3,4,5,6,7,8
    if(x===0||x===1) return x
    let left=0;
    let right =x;
    let result=0
    while(left<=right){
        let sum=Math.floor((left+right)/2)
        if(sum*sum===x) return sum
        if(sum*sum<x){
            left = sum+1
            result=sum
        }else{
            right=sum-1
        }
    }
    return result
};