'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var result = new Array();
    collectionA.forEach(function(element) {
        if (!isExisted(element[0], result)) {
            if (element.length > 1) {
                result.push({key : element[0], count : getNumber(element)});
            } else {
                result.push({key : element, count : 1});
            }

       } else {
           result.forEach(function(element2) {
               if (element2.key === element[0]) {
                   if (element.length > 1) {
                       element2.count += getNumber(element);
                   } else {
                       element2.count++;
                   }
               }
           });
       }
    });
    
    result.filter(function(element, index, self) {
        if (objectB.value.includes(element.key)) {
            element.count -= parseInt(element.count / 3);
        }
        return self;
    });
    
    return result;
}

function isExisted(key, array) {
    var flag = false;
    array.forEach(function(element) {
        if (element.key === key) {
            flag = true;
        }
    });
    
    return flag;
}

function getNumber(key) {
    return parseInt(key.replace(/[^0-9]/ig,""));
}