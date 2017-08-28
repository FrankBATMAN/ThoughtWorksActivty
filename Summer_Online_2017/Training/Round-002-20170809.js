/*
题目：查找斐波纳契数列中第 N 个数。

所谓的斐波纳契数列是指：
前2个数是 0 和 1 。
第 i 个数是第 i-1 个数和第i-2 个数的和。
斐波纳契数列的前10个数字是：
0, 1, 1, 2, 3, 5, 8, 13, 21, 34 …
*/

function getFibonacciNumberByIndex(Index) {
  let result = Index - 1;
  if (Index === 1 || Index === 2) {
    return result;
  }
  result = getFibonacciNumberByIndex(Index - 1) + getFibonacciNumberByIndex(Index - 2);
  return result;
}

function test(Index) {
  console.log(getFibonacciNumberByIndex(Index));
}

test(1);
test(2);
test(3);
test(4);
test(5);
test(6);
test(7);
test(8);
test(9);
test(10);
