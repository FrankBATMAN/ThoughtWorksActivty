'use strict';

function isExisted(key, array) {
  let flag = false;
  array.forEach((element) => {
    if (element.key === key) {
      flag = true;
    }
  });
  return flag;
}

function getNumber(key) {
  return parseInt(key.replace(/[^0-9]/ig, ''), 10);
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
  const result = [];
  collectionA.forEach((element) => {
    if (!isExisted(element[0], result)) {
      if (element.length > 1) {
        result.push({ key: element[0], count: getNumber(element) });
      } else {
        result.push({ key: element, count: 1 });
      }
    } else {
      result.forEach((element2) => {
        if (element2.key === element[0]) {
          if (element.length > 1) {
            element2.count += getNumber(element);
          } else {
            element2.count += 1;
          }
        }
      });
    }
  });
  result.filter((element, index, self) => {
    if (objectB.value.includes(element.key)) {
      element.count -= parseInt(element.count / 3, 10);
    }
    return self;
  });
  return result;
};
