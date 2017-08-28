'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return collectionA.filter((element) => {
    return objectB.value.includes(element);
  });
};

