/*
给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：
如果这个数被3整除，打印fizz.
如果这个数被5整除，打印buzz.
如果这个数能同时被3和5整除，打印fizz buzz.
*/

function fizzBuzz(k) {
  let result = '';
  result = k % 3 === 0 ? 'fizz' : result;
  result = k % 5 === 0 ? `${result}buzz` : result;
  result = result.length === 0 ? 'null' : result;

  return result;
}

function print(n) {
  for (let i = 1; i <= n; i += 1) {
    console.log(fizzBuzz(i));
  }
}

function main() {
  print(15);
}

main();
