'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter((element) => {
    return collectionB.includes(element);
  });
};
