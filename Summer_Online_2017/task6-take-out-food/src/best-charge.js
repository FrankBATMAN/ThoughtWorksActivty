const loadAllItems = require('./items');
const loadPromotions = require('./promotions');

module.exports = function bestCharge(selectedItems) {
  var itemsInfo = buildItemsInfo(selectedItems);
  var promotionInfo = buildPromotionInfo(itemsInfo.itemList);
  var priceInfo = buildPriceInfo(itemsInfo.itemList, promotionInfo.discount);
  var billDetail = getBillDetail(itemsInfo.content, promotionInfo.discount === 0 ? '' : promotionInfo.content, priceInfo.content);
  return billDetail;
}

function buildItemsInfo(selectedItems) {
  var allItems = loadAllItems();
  var itemList = [];
  var itemsContent = '';

  selectedItems.forEach(function(selectedItem) {
    var barcode = selectedItem.slice(0, 8);
    var count = selectedItem.slice(11, 12);
    console.log(count);
    allItems.forEach(function(item) {
      if (barcode === item.id) {
        item.count = count;
        itemList.push(item);
        itemsContent += item.name + ' x ' + item.count + ' = ' + item.count * item.price + '元\n';
      }
    });
  });

  return {'content': itemsContent, 'itemList': itemList};
}

function buildPromotionInfo(itemList) {
  finalPromotion = decideBestPromotion(itemList);
  var promotionInfo = {};

  promotionInfo.content = '使用优惠:\n' + finalPromotion.type;
  if (finalPromotion.type === '满30减6元') {
    promotionInfo.content += '，省' + finalPromotion.discount + '元\n';
  } else {
    promotionInfo.content += '(' + finalPromotion.discountItems + ')，省' + finalPromotion.discount + '元\n';
  }
  promotionInfo.discount = finalPromotion.discount;

  return promotionInfo;
}

function buildPriceInfo(itemList, discount) {
  var price = computeTotalPriceWithoutPromotion(itemList) - discount;
  return {
    'price': price,
    'content': '总计：' + price + '元\n'
  };
}

function decideBestPromotion(itemList) {
  sum = computeTotalPriceWithoutPromotion(itemList);
  var allPromotions = loadPromotions();
  var fullReduction = sum > 30 ? 6 : 0;
  var halfReduction = 0;
  var discountItems = '';
  itemList.forEach(function(item) {
    allPromotions.find(x => x.type == '指定菜品半价').items.forEach(function(barcode) {
      if (barcode === item.id) {
        halfReduction += item.price * item.count / 2;
        if (discountItems.length > 0) {
          discountItems += '，' + item.name;
        } else {
          discountItems += item.name;
        }
      }
    });
  });

  return fullReduction >= halfReduction
    ? {
      'type': '满30减6元',
      'discount': fullReduction
    }
    : {
      'type': '指定菜品半价',
      'discount': halfReduction,
      'discountItems': discountItems
    };

}

function computeTotalPriceWithoutPromotion(itemList) {
  var sum = 0;
  itemList.forEach(function(item) {
    sum += item.price * item.count;
  });

  return sum;
}

function getBillDetail(itemsContent, promotionContent, priceContent) {
  var billDetail = '============= 订餐明细 =============\n';
  billDetail += itemsContent;
  billDetail += '-----------------------------------\n';
  billDetail += promotionContent;
  billDetail += promotionContent.length > 0 ? '-----------------------------------\n' : '';
  billDetail += priceContent;
  billDetail += '===================================\n';

  return billDetail;
}
