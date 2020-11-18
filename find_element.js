function findElement(arr){
  const summTo = (number) => number * (number + 1) / 2;
  const summ = summTo(arr.length + 1) - arr.reduce((a, b) => a + b, 0);
  return summ == 0 ? arr.length : summ;
}

console.log(findElement([1, 3, 4]));
console.log(findElement([1, 2, 3]));
console.log(findElement([4, 2, 3]));
