'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    collectionA.filter(function(element, index, self) {
        if (objectB.value.includes(element.key)) {
            element.count -= parseInt(element.count / 3);
        }
        return self;
    })
    return collectionA;  
}
