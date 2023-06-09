// 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。
//
// 字母和数字都属于字母数字字符。
//
// 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

var isPalindrome = function(s) {
    //利用双指针，判断开头和末尾是否相等
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left=0
    let right =s.lenght - 1
    while (left < right){
        if(s[left] !== s[right]){
            return false
        }
        left++
        right--
    }
    return true
};