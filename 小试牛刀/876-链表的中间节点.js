// 给你单链表的头结点 head ，请你找出并返回链表的中间结点。
// 如果有两个中间结点，则返回第二个中间结点。

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    const newArr=[]
    const n=head.length%2===0?head.length%2:(head.length+1)%2
};