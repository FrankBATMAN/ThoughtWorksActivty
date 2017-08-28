'use strict';

module.exports = function countSameElements(collection) {
    var result = new Array();
    collection.forEach(function(element) {
        if (!isExisted(element, result)) {
            result.push({key : element, 
            count : count(element, collection)});
        }  
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

function count(key, array) {
    var count = 0;
    array.forEach(function(element) {
        if (element === key) {
            count++;
        }
    })
    
    return count;
}
