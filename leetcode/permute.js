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
 */

// 添加一个swap方法，用于交换
function swap(nums, i, j) {
  let temp
  temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

// 回溯法，对p-q之间的元素进行全排列，递归p+1
function backtrack(nums, p, q, result) {
  if (p === q) {
    console.log('当前已全部排列完', nums)
    result.push([...nums]) 
  } else {
    for (let i = p; i <= q; i++) {
      swap(nums, i, p)
      backtrack(nums, p + 1, q, result)
      swap(nums, i, p)
    }
  }
}

var permute = function(nums) {
  let result = []
  backtrack(nums, 0, nums.length - 1, result)
  return result
};

console.log(permute([1,2,3]))