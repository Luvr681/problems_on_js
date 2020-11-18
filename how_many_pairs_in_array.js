function pairs(arr) {
  const max = (a, b) => Math.max(a, b);
  const min = (a, b) => Math.min(a, b);

  let pairsOfNumbers = [], key = 0, counter = 0;

  for (let i = 0; i < arr.length; i += 2) {
    pairsOfNumbers[key] = [arr[i], arr[i + 1]];
    key++;
  }

  for (let i = 0; i < pairsOfNumbers.length; i++) {
    if (max(Math.abs(pairsOfNumbers[i][0]), Math.abs(pairsOfNumbers[i][1])) - min(Math.abs(pairsOfNumbers[i][0]), Math.abs(pairsOfNumbers[i][1])) === 1)
      counter++;
  }

  return counter;
};

console.log(pairs([1,2,5,8,-4,-3,7,6,5]),3);
console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]),2);
console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]),0);
console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62]),4);
console.log(pairs([73, 72, 8, 9, 73, 72]),3);
