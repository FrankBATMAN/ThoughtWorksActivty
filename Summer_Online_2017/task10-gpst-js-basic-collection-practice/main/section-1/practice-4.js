'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  const result = [];
  collectionA.forEach((item) => {
    result.push(...objectB.value.filter((element) => {
      return item.key.includes(element);
    }));
  });
  return result;
};

