'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var result = new Array();
    collectionA.forEach(function(element) {
        if (!isExisted(element, result)) {
            result.push({key : element, 
            count : count(element, collectionA)});
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
        if (element.key == key) {
            flag = true;
        }
    });
    
    return flag;
}

function count(key, array) {
    var count = 0;
    array.forEach(function(element) {
        if (element === key) {
            count++;
        }
    })
    
    return count;
}