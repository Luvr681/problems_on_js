function insertionSort(arr){
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i;

    while (j > 0 && arr[j - 1] > current) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = current;
  }
  return arr;
}
let array = [1, 4, 3, 2, 2, 1, 44, 2, 12, 52, 20];
console.log(insertionSort(array));
