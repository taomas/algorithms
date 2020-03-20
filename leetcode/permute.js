/**
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * 示例:
 * 输入: [1,2,3]
 * 输出:
 * [
 *   [1,2,3],
 *   [1,3,2],
 *   [2,1,3],
 *   [2,3,1],
 *   [3,1,2],
 *   [3,2,1]
 * ]
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/permutations/
 */

// 添加一个swap方法，用于交换
function swap(nums, i, j) {
  let temp
  temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

// 回溯法
let permute = function(nums) {
  let result = []
  let backtrack = function(nums, start) {
    if (start === nums.length - 1) {
      result.push([...nums])
    }
    for (let i = start; i <= nums.length - 1; i++) {
      swap(nums, i, start)
      backtrack(nums.slice(), start + 1)
      swap(nums, i, start)
    }
  }
  backtrack(nums, 0)
  return result
};

console.log(permute([1,2,3]))