/*
题目：给出链表 1->2->3->3->4->5->3, 和 val = 3, 你需要返回删除3之后的链表：1->2->4->5。
*/

function deleteItem(str, value) {
  value = `${value}`;
  const result = str.split('->').filter((element) => {
    if (element !== value) {
      return true;
    }
    return false;
  });
  return result;
}

function main() {
  const resultList = deleteItem('1->2->3->3->4->5->3', 3);
  const output = resultList.join('->');
  console.log(output);
}

main();
