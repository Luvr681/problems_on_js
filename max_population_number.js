function solve(arr) {
  const counters = arr.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  let maxElement = counters[1];
  let indexOfMaxElement = 1;
  for (let count in counters) {
    if (counters[count] > maxElement) {
      maxElement = counters[count];
      indexOfMaxElement = count;
    }
  }
  return indexOfMaxElement;
}

console.log(solve([1, 1, 2, 2, 3]));
