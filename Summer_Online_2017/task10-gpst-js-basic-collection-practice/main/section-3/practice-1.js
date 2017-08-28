
'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  collectionA.filter((element, index, self) => {
    if (objectB.value.includes(element.key)) {
      element.count -= 1;
    }
    return self;
  });
  return collectionA;
};
