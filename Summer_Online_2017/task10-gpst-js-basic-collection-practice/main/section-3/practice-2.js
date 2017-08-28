'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  collectionA.filter((element, index, self) => {
    if (objectB.value.includes(element.key)) {
      element.count -= parseInt(element.count / 3, 10);
    }
    return self;
  });
  return collectionA;
};
