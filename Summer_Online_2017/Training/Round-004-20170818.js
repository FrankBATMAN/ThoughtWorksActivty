/*
在数组 arr 中，查找值与 item 相等的元素出现的所有位置
例如：arr = [1, 3, 7, 1 ,4,] , item = 1，输出：0, 3
要求：不要使用for，while循环
*/

function findItemIndex(array, item) {
  const result = [];
  array.map((element, index) => {
    if (element === item) {
      result.push(index);
    }
    return true;
  });

  return result.join(',');
}

function main() {
  const array = [1, 3, 7, 1, 4];
  console.log(findItemIndex(array, 1));
}

main();
