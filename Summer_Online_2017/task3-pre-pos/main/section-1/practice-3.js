'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    return collectionA.filter(function(element) {return objectB.value.includes(element);});
}
