function kangaroo(x1, v1, x2, v2) {
  for(let i = 0; i < 100000; i++) {
    if(x1 + v1 == x2 + v2 || x1 == x2+v2 || x2 == x1 + v1) {
      return 'YES';
    }
    x1 = x1 + v1;
    x2 = x2 + v2;
  }
  return 'NO';
}


console.log(kangaroo(28 ,8 ,96 ,2))


