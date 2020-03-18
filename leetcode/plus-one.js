/**
给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/plus-one
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(numbers) {
  // 从最后一位开始遍历，给最后一位numbers[i]进行+1，小于10，则直接返回numbers[i]+1后的数组
  // 大于10，numbers[i] = numbers[i] % 10，进一位
  for(let i = numbers.length - 1; i >= 0; i--) {
    numbers[i] = numbers[i] + 1
    if (numbers[i] < 10) {
      return numbers
    } else {
      numbers[i] = numbers[i] % 10
    }
  }
  // 如果遍历完还没有小于10，则numbers[0]%10,进一位
  numbers[0] = numbers[0] % 10
  numbers.unshift(1)
  return numbers
}