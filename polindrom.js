function polindrom(str){
  const arr = str.toUpperCase().split(''), len = Math.floor(arr.length);
  for (let i = 0; i < len; i++) {
    if (arr[i] !== arr[arr.length - 1 - i])
      return false;
  }
  return true;
}

console.log('abba ', polindrom('abba'))
console.log('Hello ', polindrom('Hello'))
console.log('Goog', polindrom('Goog'))
console.log('HooH', polindrom('HooH'))






