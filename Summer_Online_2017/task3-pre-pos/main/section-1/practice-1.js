'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    return collectionA.filter(function(element) { return collectionB.includes(element);});
}
