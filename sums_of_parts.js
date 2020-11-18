function partsSums(ls) {
  ls.unshift(0);
  let sum = ls.reduce((p, c) => p + c, 0);
  return ls.map(v => sum = sum - v);
}

console.log(partsSums([0, 1, 3, 6, 10]))
