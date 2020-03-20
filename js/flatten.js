// 数组扁平化的几种实现
let array = [1,2,[3,4,[5,6]]]

// 递归
function flatten1(array) {
  let result = []
  for(let i = 0; i < array.length; i++) {
    let item = array[i]
    if (Array.isArray(item)) {
      result = result.concat(flatten(item))
    } else {
      result.push(item)
    }
  }
  return result
}

// 扩展运算符
function flatten2(array) {
  let result = array
  while (result.some(item => Array.isArray(item))) {
    result = [].concat(...result);
  }
  return result;
}

console.log(flatten2(array))
