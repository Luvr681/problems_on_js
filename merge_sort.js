function mergeSort(arr) {
  const len = arr.length;
  if (len > 1) {
    let mid = Math.floor(len / 2); // Определяем середину массива
    let leftHalf = arr.slice(0, mid), leftLen = leftHalf.length; // Разделяем массив. В данном случае левую половину кладём в переменную. leftLen - это длинна получившегося левого массива
    let rightHalf = arr.slice(mid), rightLen = rightHalf.length; // Аналогично поступаем с правой частью

    mergeSort(leftHalf); // Рекурсивно разделяем элементы половин на ещё меньшие половины, пока не останутся одни элементы
    mergeSort(rightHalf);

    let i = j = k = 0; // Вспомогательные переменные
    while (i < leftLen && j < rightLen) { // Делаем цикл, пока один из индексов не будет превышать длинну соотвествующей половины
      if (leftHalf[i] < rightHalf[j]) { // Проверяем, какой элемент из какой половины меньше, и кладём тот в результирующий
        arr[k] = leftHalf[i];
        i++;
      } else {
        arr[k] = rightHalf[j];
        j++;
      }
      k++;
    }

    while (i < leftLen) { // Этот цикл необходим в том случае, если в левой части остались элементы уже после основного цикла while
      arr[k] = leftHalf[i];
      i++;
      k++;
    }

    while (j < rightLen) { // Аналогично поступаем с правой частью
      arr[k] = rightHalf[j];
      j++;
      k++;
    }
  }
  return arr; // Возвращаем результирующий массив
}

const arr1 = [5, 4, 3, 2, 1];
const arr2 = [10, 234, 100, 123, 5, 84, 293, 45, 1233, 1232, 133, 10, 100, 5, 38, 19, 1];
const arr3 = [5, 203, 2, 3, 1, 2, 3, 593, 59, 2, 85, 59, 50, 403];
const arr4 = [5234, 1, 1, 3, 5, 3, 950, 28, 191, 384, 5953, 593, 502, 592, 291, 959];
const arr5 = [5, 482, 274, 17, 58, 390, 58, 19, 1, 1923, 12, 32, 1, 5, 69, 38, 584, 482];
const arr6 = [123, 45, 34, 0, 1, 32, 9, 53, 59, 238, 95, 95];
const arr7 = [5294, 29, 193, 586, 284, 592, 592, 1];

console.log('Исходный массив: ', arr1.join(' '));
console.log('Отсортированный массив: ', mergeSort(arr1).join(' '));
console.log('\n');

console.log('Исходный массив: ', arr2.join(' '));
console.log('Отсортированный массив: ', mergeSort(arr2).join(' '));
console.log('\n');

console.log('Исходный массив: ', arr3.join(' '));
console.log('Отсортированный массив: ', mergeSort(arr3).join(' '));
console.log('\n');

console.log('Исходный массив: ', arr4.join(' '));
console.log('Отсортированный массив: ', mergeSort(arr4).join(' '));
console.log('\n');

console.log('Исходный массив: ', arr5.join(' '));
console.log('Отсортированный массив: ', mergeSort(arr5).join(' '));
console.log('\n');

console.log('Исходный массив: ', arr6.join(' '));
console.log('Отсортированный массив: ', mergeSort(arr6).join(' '));
console.log('\n');

console.log('Исходный массив: ', arr7.join(' '));
console.log('Отсортированный массив: ', mergeSort(arr7).join(' '));
console.log('\n');
