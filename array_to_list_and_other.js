function arrayToList(arr) {
  let counter = arr.length - 1;
  let list = null;
  function fn() {
    if (counter >= 0) {
      let rest = list || null;
      list = {}
      list.value = arr[counter];
      list.rest = rest;
      counter--;
      fn();
    }
    return list;
  }
  return fn();
}

function listToArray(list = {}) {
  let tmp = list;
  const arr = [];

  function fn() {
    const { value, rest } = tmp;
    if (value) 
      arr.push(value);
    if (rest) {
      tmp = rest;
      return fn();
    } 
    return arr;
  }
  return fn();
}

function prepend(value, rest) {
  return { value, rest };
}

function nth(list = {}, index) {
  let counter = 0;
  let arr = [];
  let tmp = list;
  
  function fn() {
    const { value, rest } = tmp;
    if (counter <= index) {
      arr.push(value);
    }
    if (rest) {
      tmp = rest;
      return fn();
    }
    return arr[index];
  }

  return fn();
}

console.log("Array to list:", arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log("List to array:", listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log("Prepend:", prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log("Nth:", nth(arrayToList([10, 20, 30]), 1));
// → 20
