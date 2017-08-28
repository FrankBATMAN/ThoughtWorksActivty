/*
题目: 打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位数字立方和等于该数本身。例如：153是一个"水仙花数"，因为153=1的三次方＋5的三次方＋3的三次方。
*/

function getNarcissusNum() {
  const result = [];
  for (let num = 100; num < 1000; num += 1) {
    const TmpA = Math.floor(num / 100);
    const TmpB = Math.floor((num % 100) / 10);
    const TmpC = Math.floor(num % 10);
    
    if (Math.pow(TmpA, 3) + Math.pow(TmpB, 3) + Math.pow(TmpC, 3) === num) {
      result.push(num);
    }
  }

  return result;
}

function main() {
  const result = getNarcissusNum();
  result.forEach((number) => {
    console.log(number);
  });
}

main();
