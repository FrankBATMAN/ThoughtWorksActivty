'use strict';

function isExisted(name, array) {
  let flag = false;
  array.forEach((element) => {
    if (element.name === name) {
      flag = true;
    }
  });
  return flag;
}

function getNumber(key) {
  return parseInt(key.replace(/[^0-9]/ig,''), 10);
}

module.exports = function countSameElements(collection) {
  const result = [];
  collection.forEach((element) => {
    if (!isExisted(element[0], result)) {
      if (element.length > 1) {
        result.push({ name: element[0], summary: getNumber(element) });
      } else {
        result.push({ name: element, summary: 1 });
      }
    } else {
      result.forEach((element2) => {
        if (element2.name === element[0]) {
          if (element.length > 1) {
            element2.summary += getNumber(element);
          } else {
            element2.summary += 1;
          }
        }
      });
    }
  });
  return result;
};
