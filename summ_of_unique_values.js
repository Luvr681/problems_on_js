function repeats(arr){ // Сумма уникальных значений в массиве
  return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0);
};
