function lastDigit(arr) {
  let result = 1, subArray = [], len = arr.length;
  for (let i = 0; i < len; i++) {
    arr[i] = String(arr[i]).split('');
  }
  for (let i = 0; i < len; i++) {
    subArray[i] = +arr[i][arr[i].length - 1];
  }
  result = String(subArray.reduce((a, b) => a ** b)).split('');
  return +result[result.length - 1];
}
console.log(lastDigit([12, 32, 12, 32]));
