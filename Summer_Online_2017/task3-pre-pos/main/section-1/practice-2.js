'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var result = new Array();
    for (var i=0; i<collectionB.length; ++i) {
        result.push.apply(result, collectionA.filter(function(element) { return collectionB[i].includes(element)}));
    }
    return result;
}