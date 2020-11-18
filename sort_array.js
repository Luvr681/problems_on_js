function sortArray(array) { 
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))//, [1, 3, 2, 8, 5, 4])
console.log(sortArray([5, 3, 1, 8, 0]))//, [1, 3, 5, 8, 0])
console.log(sortArray([]))//,[])
