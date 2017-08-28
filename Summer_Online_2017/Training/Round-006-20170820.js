/*
判断一个字符串中出现次数最多的字符，并统计次数
例如：str = ‘abcsbaddbizdbas’,输出：{b：4}
例如：str = ‘aaaaabbdbdbb’，输出：{a：5，b：5}
*/

function duplicateCounter(str) {
  const strArr = str.split('');
  strArr.sort();
  let counter = 0;
  for (let i = 1; i < strArr.length;) {
    const elementCount = (strArr.lastIndexOf(strArr[i]) - strArr.indexOf(strArr[i])) + 1;
    counter = elementCount > counter ? elementCount : counter;
    i = strArr.lastIndexOf(strArr[i]) + 1;
  }

  const result = {};
  for (let k = 0; k < strArr.length;) {
    if ((strArr.lastIndexOf(strArr[k]) - strArr.indexOf(strArr[k])) + 1 === counter) {
      result[strArr[k]] = counter;
    }
    k = strArr.lastIndexOf(strArr[k]) + 1;
  }
  return result;
}

function main() {
  const str1 = 'abcsbaddbizdbas';
  const str2 = 'aaaaabbdbdbb';
  console.log(duplicateCounter(str1));
  console.log(duplicateCounter(str2));
}

main();
