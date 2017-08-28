/*
数组去重
例如：arr = [‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1], 输出：[‘s’, ‘a’, ‘b’,1,‘1’]
*/

function killDuplicate(array) {
  const result = [];
  array.forEach((element, index) => {
    if (array.indexOf(element) === index) {
      result.push(element);
    }
  });

  return result.join(',');
}

function main() {
  const array = ['s', 'a', 's', 'b', 'a', 1, '1', 1];
  console.log(killDuplicate(array));
}

main();

