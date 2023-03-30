// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right =nums.length - 1
    while(left <= right) {
        let middle = Math.floor((left + right) / 2)
        if(nums[middle] < target) {
            left = middle + 1
        }else if(nums[middle] > target) {
            right = middle -1
        }else {
            return middle
        }
    }
    return -1
};
console.log(search([-1,0,3,5,9,12],9))