function solve(firstString, secondString) {
  let bool = firstString == 1 && firstString == '*';
  if (firstString.length > 1) {

    let firstArray = firstString.split('');
    let indexOfStar = firstArray.indexOf('*');
    firstArray = firstArray.join('').split('*');
    let secondArray = secondString.split('');
    let leftHalfOfSecondArray = secondArray.slice(0, indexOfStar).join('');
    let rightHalfOfSecondArray = secondArray.slice(indexOfStar);

    return firstArray[0] == leftHalfOfSecondArray && 
           firstArray[1] == rightHalfOfSecondArray[rightHalfOfSecondArray.length - 1];

  } else if (bool) {
    return true;
  } else {
    return false;
  }
}

console.log(solve("code*s","codewars"))//,true)
console.log(solve("codewar*s","codewars"))//, true)
console.log(solve("code*warrior","codewars"))//,false)
