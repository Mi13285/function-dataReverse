function getMultiPles(dataLength) {
  let result = [];
  for (let i = 0; i <= dataLength; i++) {
    result.unshift(i * 8);
  }
  return result;
}
function dataReverse(data) {
  let answer = [];
  const multiples = getMultiPles(data.length);
  for (let j = 0; j < multiples.length - 1; j++) {
    answer.push(...data.slice(multiples[j + 1], multiples[j]));
  }
  return answer;
}
console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ])
);
