const fun = require('../lib/main.js');

const main = fun.main;
const generateWallLyric = fun.generateWwallLyric;
const generateTakenLyric = fun.generateTakenLyric;

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

var expect = chai.expect;
chai.use(sinonChai);

describe('测试描述', () => {
  sinon.spy(console, 'log');

  it('测试用例1, 输入1生成wallLyric', () => {
    const result = '1 bottle of beer on the wall, 1 bottle of beer.';
    const wallLyric = generateWallLyric(1);
    const expectString = wallLyric[0];

    expect(expectString).to.equal(result);
  });

  it('测试用例4, 输入2生成wallLyric', () => {
    const result = '2 bottles of beer on the wall, 2 bottles of beer.1 bottle of beer on the wall, 1 bottle of beer.';
    const wallLyric = generateWallLyric(2);
    let expectString = '';
    wallLyric.forEach((element) => { expectString += element; });

    expect(expectString).to.equal(result);
  });

  it('测试用例5, 输入1生成takenLyric', () => {
    const result = 'Take one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.';
    const takenLyric = generateTakenLyric(1);
    let expectString = '';
    takenLyric.forEach((element) => { expectString += element; });

    expect(expectString).to.equal(result);
  });

  it('测试用例6, 输入2生成takenLyric', () => {
    const result = 'Take one down and pass it around, 1 bottle of beer on the wall.Take one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.';
    const takenLyric = generateTakenLyric(2);
    let expectString = '';
    takenLyric.forEach((element) => { expectString += element; });

    expect(expectString).to.equal(result);
  });

  it('测试用例7, 输入1生成songLyric', () => {
    const result = '1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    const expectString = main(1);

    expect(expectString).to.equal(result);
  });

  it('测试用例8, 输入2生成songLyric', () => {
    const result = '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';

    const expectString = main(2);

    expect(expectString).to.equal(result);
  });
});
