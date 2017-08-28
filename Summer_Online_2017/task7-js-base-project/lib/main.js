function generateWwallLyric(bottleNum) {
  const wallLyric = [];
  for (let i = bottleNum; i > 1; i -= 1) {
    wallLyric.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
  }
  wallLyric.push('1 bottle of beer on the wall, 1 bottle of beer.');
  return wallLyric;
}

function generateTakenLyric(bottleNum) {
  const takenLyric = [];
  for (let i = bottleNum; i > 1; i -= 1) {
    takenLyric.push(`Take one down and pass it around, ${i - 1} bottle of beer on the wall.`);
  }
  takenLyric.push('Take one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.');
  return takenLyric;
}

function generateSongLyric(wallLyric, takenLyric) {
  let result = '';
  for (let i = 0; i < wallLyric.length; i += 1) {
    result += `${wallLyric[i]}\n${takenLyric[i]}\n`;
  }
  return result;
}

function main(num) {
  const wallLyric = generateWwallLyric(num);
  const takenLyric = generateTakenLyric(num);
  const songLyric = generateSongLyric(wallLyric, takenLyric);
  return songLyric;
}

exports.generateWwallLyric = generateWwallLyric;
exports.generateTakenLyric = generateTakenLyric;
exports.generateSongLyric = generateSongLyric;
exports.main = main;
