'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  var result = new Array();
  for (var i=0; i<collectionA.length; ++i) {
      result.push.apply(result, objectB.value.filter(function(element) {return collectionA[i].key.includes(element);}));
  }
     return result;
}
 