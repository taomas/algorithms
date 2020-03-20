/**
给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次。
说明：
所有数字（包括目标数）都是正整数。
解集不能包含重复的组合。 
示例 1:

输入: candidates = [10,1,2,7,6,1,5], target = 8,
所求解集为:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
示例 2:

输入: candidates = [2,5,2,1,2], target = 5,
所求解集为:
[
  [1,2,2],
  [5]
]
 */

//  回溯法
 /**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum = function(candidates, target) {
  let result = []
  let subs = []
  let backtrack = function(subs, start) {
    let subsSum = subs.reduce((sum, value) => {
      return sum + value
    }, 0)
    
    if (subsSum === target) {
      result.push(JSON.stringify(subs.sort()))
    }
    for (let i = start; i < candidates.length; i++) {
      let item = candidates[i]
      subs.push(item)
      backtrack(subs.slice(), i + 1)
      subs.pop()
    }
  }
  backtrack(subs, 0)
  return [...new Set(result)].map(item => JSON.parse(item))
};

let candidates = [10,1,2,7,6,1,5]
let target = 8

console.log(combinationSum(candidates, target))