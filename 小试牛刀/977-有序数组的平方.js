// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
// 输入：nums = [-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
// 解释：平方后，数组变为 [16,1,0,9,100]
// 排序后，数组变为 [0,1,9,16,100]


/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function(nums) {
//     const arr = []
//     for (let i = 0; i < nums.length; i++) {
//         const r = nums[i] *nums[i]
//         arr.push(r)
//     }
//     arr.sort((a,b)=>{
//         return a-b
//     })
//     return arr
// };
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function(nums) {
//     for (let i = 0; i <nums.length; i++) {
//         if(nums[i] <= 0){
//             nums[i] = - nums[i]
//         }
//         nums[i] =nums[i] * nums[i]
//     }
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length - n - 1; j++) {
//                 if(nums[j] > nums[j+1]){
//                     let temp
//                     temp = nums[j]
//                     nums[j] = nums[j+1]
//                     nums[j+1] = temp
//                 }
//         }
//     }
//     return nums
// };
console.log(sortedSquares([-4,-1,0,3,10]))