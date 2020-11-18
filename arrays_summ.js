function addArrays(arr1, arr2) {
  const elementToNewType = (arr, action) => arr.map(el => action(el));
  const summTo = (arr) => arr.length > 0 ? arr.reduce((a, b) => a + b) : 0;
  arr1 = elementToNewType(arr1, String);
  arr2 = elementToNewType(arr2, String);

  let [summ1, summ2] = [summTo(arr1), summTo(arr2)];
  let result = (`${Number(summ2) + Number(summ1)}`).split('');

  if (result[0] == '-') {
    result.splice(0, 1);
    result[0] = -Number(result[0]);
  }  
  result = elementToNewType(result, Number)
  
  return arr1.length || arr2.length ? result : [];
}

console.log(addArrays([6,7], [6,7]))// , [ 1, 3, 4 ])b
console.log(addArrays([], []));

