function parseConvertType(input) {
  return input.includes(':') || input.includes('|');
}

function convert2Number(code) {
  const resultArr = [];
  const codeSplit = code.split('  ');
  for (let i = 0; i < codeSplit.length - 2; i += 1) {
    switch (codeSplit[i]) {
      case '||:::':
        resultArr.push('0');
        break;
      case ':::||':
        resultArr.push('1');
        break;
      case '::|:|':
        resultArr.push('2');
        break;
      case '::||:':
        resultArr.push('3');
        break;
      case ':|::|':
        resultArr.push('4');
        break;
      case ':|:|:':
        resultArr.push('5');
        break;
      case ':||::':
        resultArr.push('6');
        break;
      case '|:::|':
        resultArr.push('7');
        break;
      case '|::|:':
        resultArr.push('8');
        break;
      case '|:|::':
        resultArr.push('9');
        break;
      default:
    }
  }
  if (resultArr.length === 9) {
    resultArr.splice(5, 0, '-');
  }
  return resultArr.join('');
}

function computeCheckCode(numberArr) {
  let sum = 0;
  numberArr.forEach((item) => {
    sum += item === '-' ? 0 : parseInt(item, 10);
  });
  return (10 - (sum % 10)).toString();
}

function convert2Code(number) {
  const numberArr = number.split('');
  number += computeCheckCode(numberArr);
  const resultArr = ['|'];
  for (let i = 0; i < number.length; i += 1) {
    switch (number[i]) {
      case '0':
        resultArr.push('||:::');
        break;
      case '1':
        resultArr.push(':::||');
        break;
      case '2':
        resultArr.push('::|:|');
        break;
      case '3':
        resultArr.push('::||:');
        break;
      case '4':
        resultArr.push(':|::|');
        break;
      case '5':
        resultArr.push(':|:|:');
        break;
      case '6':
        resultArr.push(':||::');
        break;
      case '7':
        resultArr.push('|:::|');
        break;
      case '8':
        resultArr.push('|::|:');
        break;
      case '9':
        resultArr.push('|:|::');
        break;
      default:
    }
  }
  resultArr.push('|');
  return resultArr.join('  ');
}

function postnetConverter(input) {
  const codeType = parseConvertType(input);
  return codeType ? convert2Number(input) : convert2Code(input);
}

exports.postnetConverter = postnetConverter;
exports.parseConvertType = parseConvertType;
exports.convert2Number = convert2Number;
exports.computeCheckCode = computeCheckCode;
exports.convert2Code = convert2Code;
