//回文数是只正序===倒叙

var isPalindrome = function(x) {
    const y=x.toString()
    let left=0
    let right = x.toString().length-1
    while(left < right){
        if(y[left] != y[right]){
            return false
        }
        left++
        right--
    }
    return true
};
console.log(isPalindrome(12312321))