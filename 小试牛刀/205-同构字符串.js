// 给定两个字符串 s 和 t ，判断它们是否是同构的。
//
// 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
//
// 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。
//


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    //长度不相等，一定不是同构字符串
    if(s.length !== t.length){
        return false
    }
    const ms = new Map()
    const mt = new Map()
    let msv = null
    let mtv = null
    //遍历字符串，添加到map中，key用字符串的字母，value用结束的索引号，然后比较两个map的value值是否相等
    for (let i = 0; i < s.length; i++) {
        ms.set(s[i],i)
        msv = Array.from(ms.values())
        mt.set(t[i],i)
        mtv = Array.from(mt.values())
    }
    for (let i = 0; i < msv.length; i++) {
        if(msv[i] !== mtv[i]){
            return false
        }
    }
    return true
};
console.log(isIsomorphic('egg','add'))