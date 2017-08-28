/*
题目：统计数组 arr 中值等于 item 的元素出现的次数
例如：arr = [1, 3, 7, 1 ,4,] , item = 1,item出现的次数为2
要求：不要使用for循环
*/

function countNum(arr, item) {
  var existArr = arr.filter((ele) => {
    if (ele === item) {
      return true;
    }
    return false;
  });
  console.log(existArr.length);
}

function main() {
  const array = [1, 3, 7, 4, 1]
  const item = 1;
  countNum(array, item);
}

main();
