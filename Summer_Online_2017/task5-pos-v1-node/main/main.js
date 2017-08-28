const datbase = require('../main/datbase.js');

var loadAllItems = datbase.loadAllItems;
var loadPromotions = datbase.loadPromotions;

module.exports = function main(){
    
    var inputs = [
                'ITEM000001',
                'ITEM000001',
                'ITEM000001',
                'ITEM000001',
                'ITEM000001',
                'ITEM000003-2',
                'ITEM000005',
                'ITEM000005',
                'ITEM000005'
            ];
    printInventory(inputs);
}

function printInventory(inputs) {
    var itemList = new Array();
    buildItemList(inputs, itemList);
    addPromotion2ItemList(itemList);
    var cost = buildCostList(itemList);
    var bill = printBill(itemList, cost);
    console.log(bill);
}

function buildItemList(inputs, itemList) {
    var allItems = loadAllItems();
    inputs.forEach(function(productbarcode) 
    {
        var pos = productbarcode.indexOf('-');
        var actualbarcode = pos != -1 ? productbarcode.substring(0, pos) : productbarcode;
        var count = pos != -1 ? parseInt(productbarcode.substring(pos+1)) : 1;
        
        if (isExistedProduct(actualbarcode, itemList))
        {
            itemList.forEach(function(item)
            {
                if (item.barcode === actualbarcode)
                {
                    item.count += count; 
                }
               
            });
        }
        else
        {
            allItems.forEach(function(item)
            {
                if (item.barcode === actualbarcode)
                {
                    itemList.push(
                    {
                        'barcode' : item.barcode,
                        'name' : item.name,
                        'count': count,
                        'unit' : item.unit,
                        'price' : item.price.toFixed(2),
                        'promotion' : 0
                    });
                }
            });
        }
    });

}

function isExistedProduct(barcode, itemList) {
    var flag = false;
    itemList.forEach(function(element) {
        if (element.barcode === barcode) {
            flag = true;
        }
    })
    
    return flag;
}

function addPromotion2ItemList(itemList) {
    var allPromotions = loadPromotions();
    allPromotions.forEach(function(promotion) {
        if (promotion.type == 'BUY_TWO_GET_ONE_FREE') {
            promotion.barcodes.forEach(function(barcode) {
                itemList.forEach(function(item) {
                    if (barcode === item.barcode) {
                        item.promotion = parseInt(item.count / 3);
                    }
                });
            });
        }
    });
}

function buildCostList(itemList) {
    var cost = new Object();
    var sum = 0;
    var save = 0;
    itemList.forEach(function(item) {
        sum += item.price * (item.count-item.promotion);
        save += item.price * item.promotion;
    });
    
    cost['sum'] = sum.toFixed(2);
    cost['save'] = save.toFixed(2);
    return cost;
}

function printBill(itemList, cost) {
   var bill = '***<没钱赚商店>购物清单***\n';
   itemList.forEach(function(item) {
       bill += '名称：' + item.name + '，数量：' + item.count + item.unit 
       + '，单价：' + item.price + '(元)，小计：' + (item.price * (item.count-item.promotion)).toFixed(2) + '(元)\n';
   });
   
   bill += '----------------------\n' + '挥泪赠送商品：\n';
   
   itemList.forEach(function(item) {
       if (item.promotion > 0) {
           bill += '名称：' + item.name + '，数量：' + item.promotion + item.unit + '\n'
       }
   });
   
   bill += '----------------------\n';
   
   bill += '总计：' + cost.sum + '(元)\n';
   bill += '节省：' + cost.save + '(元)\n';
   
   bill +=  '**********************';
   
   return bill;
}