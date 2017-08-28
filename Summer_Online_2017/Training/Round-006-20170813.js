/*
给定一个未排序的整数数组，找到其中位数。
function XXX(arr){}
*/

function getMidNum(array) {
  array.sort((a, b) => a - b);
  return array[Math.floor(array.length / 2)];
}

function main() {
  const arrayA = [3, 1, 6, 17, 35, 21, 11, 8];
  const arrayB = [3, 1, 6, 17, 35, 21, 8];

  console.log(getMidNum(arrayA));
  console.log(getMidNum(arrayB));
}

main();
