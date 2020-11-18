function lifePathNumber(dateOfBirth) {
  let arr = dateOfBirth.split('-');

  function summ(number) { 
    while (String(number).length > 1) {
      number = String(number).split('')
      number = number.reduce((a, b) => +a + +b);
    }
    return number;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = summ(arr[i]);
  }

  arr = summ(arr.join(''));
  
  return +arr;
}


console.log(lifePathNumber("1879-03-14"))//, 6)
console.log(lifePathNumber("1815-12-10"))//, 1)
console.log(lifePathNumber("1961-07-04"))//, 1)
