function cutTheRopes(a) {
  let result = [];
  while (a.length > 0) {
    let minValue = Math.min(...a);
    result.push(a.length);
    a = a.map(el => el -= minValue).filter(el => el > 0);
  }
  return result;
}


console.log(cutTheRopes([3, 3, 2, 9, 7]))//,[5, 4, 2, 1])
console.log(cutTheRopes([1, 2, 3, 4, 3, 3, 2, 1]))//,[8, 6, 4, 1])
