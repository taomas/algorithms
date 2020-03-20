/**
78. 子集 
给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例:

输入: nums = [1,2,3]
输出:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/subsets/
 */
// 使用回溯法
 function subsets(nums) {
  let result = []
  let subNums = []
  let backtrack = function(subNums, start) {
    result.push(subNums)
    for (let i = start; i < nums.length; i++) {
      subNums.push(nums[i])
      backtrack(subNums.slice(), i+1)
      subNums.pop()
    }
  }
  backtrack(subNums, 0)
  return result
 }

// 使用递归

 console.log(subsets([1,2,3]))