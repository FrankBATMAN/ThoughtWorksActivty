'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    collectionA.filter(function(element, index, self) {
        if (objectB.value.includes(element.key)) {
            element.count--;
        }
        return self;
    })
    return collectionA;       
}
