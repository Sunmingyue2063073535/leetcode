/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    //求出数组的和
    let sum = nums.reduce((pre,item)=>pre+item)
    let leftSum = 0
    for (let i = 0; i < nums.length; i++) {
        if(sum - 2 * leftSum === nums[i]){
            return i
        }
        leftSum += nums[i]
    }
    return -1
};

// const s = new Set([1,2,2,1,3])
// s.add('2')
//
// console.log(s)
// console.log(s.size)
// console.log(s.has(7))
// console.log(Array.from(s))
// s.clear()
// console.log(s)
const m = new Map()
m.set('a',1)
m.set('a',2)
m.set(['a'],1)
console.log(m.get['a'])
console.log(m.get('a'))
const a= m.get('a')
console.log(m)
console.log(a)