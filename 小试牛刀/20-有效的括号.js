// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
//
// 有效字符串需满足：
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // ()
    const arr = []
    for (let i = 0; i < s.length; i++) {
        const start = s[i]
        if (start === "(" || start === "[" || start === "{") {
            arr.push(start)
        } else {
            const end = arr[arr.length - 1]
            if (start === ")" && end === '(' || s[i] === "]" && end === '[' || s[i] === "}" && end === '{') {
                arr.pop()
            } else {
                return false
            }
        }
    }
    return arr.length === 0
};
console.log(isValid('{{}}'))