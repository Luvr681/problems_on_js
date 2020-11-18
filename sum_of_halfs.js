function peak(arr) {
  const sum = arr.reduce((a, b) => a + b)
  const subSum = (array, i) => array.slice(0, i).reduce((a, b) => a + b)
  const rightSum = (array, i) => sum - subSum(arr, i) - array[i]

  for (let i = 1; i < arr.length; i++) {
    if (subSum(arr, i) === rightSum(arr, i))
      return i
  }

  return -1
}

console.log(peak([1,2,3,5,3,2,1]))
console.log(peak([1,12,3,3,6,3,1]))
console.log(peak([10,20,30,40]))
