/*
给定一个数组，该数组中的每个元素要么是个数组，要么是整数。将其变成一个只包含整数的简单数组。
给定 [1,2,[1,2]]，返回 [1,2,1,2]。

给定 [1,2,[1,2],[3,4]]，返回 [1,2,1,2,3,4]。
给定 [4,[3,[2,[1]]]]，返回 [4,3,2,1]。
*/

function merge(array) {
  let result = [];
  array.forEach((element) => {
    if (Array.isArray(element)) {
      result = result.concat(merge(element));
    } else {
      result.push(element);
    }
  });
  return result;
}

function main() {
  const arrayA = [4, [3, [2, [1]]]];
  console.log(merge(arrayA));
}

main();
