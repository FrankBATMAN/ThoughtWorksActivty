'use strict';

module.exports = function countSameElements(collection) {
    var result = new Array();
    collection.forEach(function(element) {
        if (!isExisted(element[0], result)) {
            if (element.length > 1) {
                result.push({name : element[0], summary : getNumber(element)});
            } else {
                result.push({name : element, summary : 1});
            }

       } else {
           result.forEach(function(element2) {
               if (element2.name === element[0]) {
                   if (element.length > 1) {
                       element2.summary += getNumber(element);
                   } else {
                       element2.summary++;
                   }
               }
           });
       }
    });

    return result;
}

function isExisted(name, array) {
    var flag = false;
    array.forEach(function(element) {
        if (element.name === name) {
            flag = true;
        }
    });
    
    return flag;
}

function getNumber(key) {
    return parseInt(key.replace(/[^0-9]/ig,""));
}