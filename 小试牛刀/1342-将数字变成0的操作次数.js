// 输入：num = 14
// 输出：6
// 解释：
// 步骤 1) 14 是偶数，除以 2 得到 7 。
// 步骤 2） 7 是奇数，减 1 得到 6 。
// 步骤 3） 6 是偶数，除以 2 得到 3 。
// 步骤 4） 3 是奇数，减 1 得到 2 。
// 步骤 5） 2 是偶数，除以 2 得到 1 。
// 步骤 6） 1 是奇数，减 1 得到 0 。
function numberOfSteps(num) {
    let count = 0;
    while (num != 0) {
        if (num % 2 == 0) {
            num /= 2;
        } else {
            num -= 1;
        }
        count++;
    }
    return count;
}
console.log(numberOfSteps(1))