/*
题目：找出数组 arr 中重复出现过的元素
例如：arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’
*/

function findDuplicatedItem(array) {
  const duplicatedarray = array.filter((element, index) => {
    if (array.indexOf(element) !== index) {
      return true;
    }
    return false;
  });
  duplicatedarray.sort();
  const result = [];
  result.push(array[0]);
  duplicatedarray.forEach((elemnet) => {
    if (elemnet !== result[result.length - 1]) {
      result.push(elemnet);
    }
  });
  result.join(','); 
  return result;
}

function main() {
  const array = ['a', 'ab', 'ed', 'da', 'a', 'ed', 'b'];
  const result = findDuplicatedItem(array);
  console.log(result);
}

main();

