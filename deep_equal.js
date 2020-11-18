function deepEqual(firstValue, secondValue) {
  const areObject = typeof firstValue === 'object' && typeof secondValue === 'object';
  const areNotNull = typeof firstValue !== null && typeof secondValue !== null; 

  if (areObject && areNotNull) {
  
    for (let key in firstValue) {
      if (!secondValue.hasOwnProperty(key)) 
        return false
      if (typeof firstValue[key] === 'object' && typeof secondValue[key] === 'object') {
        const result = deepEqual(firstValue[key], secondValue[key]);
        if (!result) 
          return false;
      } else {
        if (firstValue[key] !== secondValue[key])
          return false;
      }
    }

    return true;
  } else {
    return firstValue === secondValue;
  }
}



let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
