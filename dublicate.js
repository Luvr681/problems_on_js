function duplicateSandwich(a) {
  let firstIndex, secondIndex;
  let arr = typeof a !== 'object' ? a.split('') : a;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        firstIndex = i;
        secondIndex = j;
      }
    }
  }
  
  arr = arr.slice(firstIndex + 1, secondIndex);
  arr = typeof a !== 'object' ? arr.join('') : arr;

  return arr;
}

console.log( duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8]))//, [2, 3, 4, 5, 6] );
console.log( duplicateSandwich(["None", "Hello", "Example", "hello", "None", "Extra"]))//, ["Hello", "Example", "hello"] );
console.log( duplicateSandwich([0, 0]))//, [] );
console.log( duplicateSandwich( [true, false, true]))//, [false] );
console.log( duplicateSandwich("example"))//, "xampl" );
