'use strict';

function count(key, array) {
  let counter = 0;
  array.forEach((element) => {
    if (element === key) {
      counter += 1;
    }
  });
  return counter;
}

function isExisted(key, array) {
  let flag = false;
  array.forEach((element) => {
    if (element.key === key) {
      flag = true;
    }
  });
  return flag;
}

module.exports = function countSameElements(collection) {
  const result = [];
  collection.forEach((element) => {
    if (!isExisted(element, result)) {
      result.push({ key: element, count: count(element, collection) });
    }
  });
  return result;
};
