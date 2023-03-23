// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。



var twoSum = function(nums, target) {
    const newArr=[]
    for(let i = 0; i<nums.length;i++){
        for (let j= i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                newArr.push(i)
                newArr.push(j)
                break
            }else{
                continue
            }
        }
    }
    return newArr
};
console.log(twoSum([3,3],5))