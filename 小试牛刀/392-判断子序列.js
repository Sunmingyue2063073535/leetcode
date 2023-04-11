// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
//
// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
//
// 进阶：
//
// 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？
// 输入：s = "abc", t = "ahbgdc"
// 输出：true
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    //判断如果是空字符串直接返回true
    if(s=='' && t=='') return true
    //记录s是否被t包含
    let left = 0
    for (let i = 0; i < t.length; i++) {
        //如果t里面有s，就让left++ 因为循环是按顺序的，所以符合题目
        if(s[left] == t[i]) left++
        //如果被包含的个数等于s的长度，那么s就是t的子序列
        if(left == s.length) return true
    }
    //否则返回false
    return false
};