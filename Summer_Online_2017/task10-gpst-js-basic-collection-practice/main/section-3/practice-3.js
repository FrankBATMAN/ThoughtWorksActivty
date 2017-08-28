'use strict';

function isExisted(key, array) {
  let flag = false;
  array.forEach((element) => {
    if (element.key == key) {
      flag = true;
    }
  });
  return flag;
}

function count(key, array) {
  let counter = 0;
  array.forEach((element) => {
    if (element === key) {
      counter += 1;
    }
  });
  return counter;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
  const result = [];
  collectionA.forEach((element) =>{
    if (!isExisted(element, result)) {
      result.push({ key: element, count: count(element, collectionA) });
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
