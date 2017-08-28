/*
题目：给出2*n + 1 个的数字(数组)，除其中一个数字之外其他每个数字均出现两次，找到这个数字。
eg: function findNum(arr){ ... }
*/

function findNum(array) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    result.push(false);
  }
  array.forEach((element, index) => {
    const firstIndex = array.indexOf(element);
    if (firstIndex !== index) {
      result[index] = true;
      result[firstIndex] = true;
    }
  });

  return array[result.indexOf(false)];
}

function test() {
  const array = [1, 1, 2, 4, 6, 6, 4, 15, 3, 15, 7, 9, 16, 55, 7, 9, 2, 3];
  console.log(findNum(array));
}

test();
