'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  const result = [];
  collectionB.forEach((item) => {
    result.push(...collectionA.filter((element) => {
      return item.includes(element);
    }));
  });
  return result;
};
