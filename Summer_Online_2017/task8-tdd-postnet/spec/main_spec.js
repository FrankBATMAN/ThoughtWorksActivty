// "use strict";
const main = require('../lib/main.js');

const postnetConverter = main.postnetConverter;
const parseConvertType = main.parseConvertType;
const convert2Number = main.convert2Number;
const computeCheckCode = main.computeCheckCode;
const convert2Code = main.convert2Code;

const _ = require('lodash');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

var expect = chai.expect;
chai.use(sinonChai);

describe('测试描述', () => {

  it('测试用例1,输入条码，输出true', () => {
    const result = parseConvertType('|  |:|::  :|:|:  |:::|  :::||  ::||:  :|:|:  |');
    const expectType = true;
    expect(expectType).to.equal(result);
  });

  it('测试用例2,输入邮编，输出false', () => {
    const result = parseConvertType('95713');
    const expectType = false;
    expect(expectType).to.equal(result);
  });

  it('测试用例3, 6位条码转换到邮编', () => {
    const result = convert2Number('|  |:|::  :|:|:  |:::|  :::||  ::||:  :|:|:  |');
    const expectString = '95713';
    expect(expectString).to.equal(result);
  });

  it('测试用例4, 10位条码转换到邮编', () => {
    const result = convert2Number('|  |:|::  :|:|:  |:::|  :::||  ::||:  |:|::  :|:|:  |:::|  :::||  ::||:  |');
    const expectString = '95713-9571';
    expect(expectString).to.equal(result);
  });

  it('测试用例5, 计算5位邮编的校验码', () => {
    const numberArr = ['9', '5', '7', '1', '3'];
    const result = computeCheckCode(numberArr);
    const expectString = '5';
    expect(expectString).to.equal(result);
  });

  it('测试用例6, 计算9位邮编的校验码', () => {
    const numberArr = ['9', '5', '7', '1', '3', '9', '5', '7', '1'];
    const result = computeCheckCode(numberArr);
    const expectString = '3';
    expect(expectString).to.equal(result);
  });

  it('测试用例7, 计算10位邮编的校验码', () => {
    const numberArr = ['9', '5', '7', '1', '3', '-', '9', '5', '7', '1'];
    const result = computeCheckCode(numberArr);
    const expectString = '3';
    expect(expectString).to.equal(result);
  });

  it('测试用例8, 5位邮编转换条码', () => {
    const result = convert2Code('95713');
    const expectString = '|  |:|::  :|:|:  |:::|  :::||  ::||:  :|:|:  |';
    expect(expectString).to.equal(result);
  });

  it('测试用例9, 9位邮编转换条码', () => {
    const result = convert2Code('957139571');
    const expectString = '|  |:|::  :|:|:  |:::|  :::||  ::||:  |:|::  :|:|:  |:::|  :::||  ::||:  |';
    expect(expectString).to.equal(result);
  });

  it('测试用例10, 10位邮编转换条码', () => {
    const result = convert2Code('95713-9571');
    const expectString = '|  |:|::  :|:|:  |:::|  :::||  ::||:  |:|::  :|:|:  |:::|  :::||  ::||:  |';
    expect(expectString).to.equal(result);
  });

  it('测试用例11, 整合版:5位邮编转换条码', () => {
    const result = postnetConverter('95713');
    const expectString = '|  |:|::  :|:|:  |:::|  :::||  ::||:  :|:|:  |';
    expect(expectString).to.equal(result);
  });

  it('测试用例12, 整合版:9位邮编转换条码', () => {
    const result = postnetConverter('957139571');
    const expectString = '|  |:|::  :|:|:  |:::|  :::||  ::||:  |:|::  :|:|:  |:::|  :::||  ::||:  |';
    expect(expectString).to.equal(result);
  });

  it('测试用例13, 整合版:10位邮编转换条码', () => {
    const result = postnetConverter('95713-9571');
    const expectString = '|  |:|::  :|:|:  |:::|  :::||  ::||:  |:|::  :|:|:  |:::|  :::||  ::||:  |';
    expect(expectString).to.equal(result);
  });

  it('测试用例14, 整合版:6位条码转换到邮编', () => {
    const result = postnetConverter('|  |:|::  :|:|:  |:::|  :::||  ::||:  :|:|:  |');
    const expectString = '95713';
    expect(expectString).to.equal(result);
  });

  it('测试用例15, 整合版:10位条码转换到邮编', () => {
    const result = postnetConverter('|  |:|::  :|:|:  |:::|  :::||  ::||:  |:|::  :|:|:  |:::|  :::||  ::||:  |');
    const expectString = '95713-9571';
    expect(expectString).to.equal(result);
  });
  // it("测试用例1", () => {
  // sinon.spy(consoconstle, 'log');
  //     var result = main();
  //     var expectString = '';
  //     expect(expectString).to.equal(result);
  //   });

  // it("测试用例2", () => {
  //     main();
  //     let result = _.flatten(console.log.args).join('\n');
  //     const expectString = '';
  //     expect(expectString).to.equal(result);
  //   });
});
