/*
题目：将一个正整数分解质因数。例如：输入90,打印出90=2335
 */

function decompose(num) {
  if (num === 1) {
    console.log('%d=%d', num, num);
  } else {
    let result = '';
    result += `${num}=`;
    for (let i = 2; i <= num; i += 1) {
      while (num % i === 0) {
        num /= i;
        result += i;
      }
    }
    console.log(result);
  }
}

decompose(91);
