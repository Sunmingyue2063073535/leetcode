// 给你单链表的头结点 head ，请你找出并返回链表的中间结点。
// 如果有两个中间结点，则返回第二个中间结点。

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(arr){
    const newArr=[]
    let left=0
    let right =arr.length-1
    while(left<=right){
        newArr.push(arr[right])
        left++;
        right--;
        if(arr.length%2===1 && right===(arr.length/2)-1){
            newArr.push(arr[right])
            return
        }
    }
    return newArr
};
console.log(middleNode([1,2,3,4,5]))