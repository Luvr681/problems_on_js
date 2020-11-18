function encode(str) {
  const letters = ['a', 'e', 'i', 'o', 'u'];
  let arr = str.split('').map(el => {
    letters.map((letter, i) => {
      el = el === letter ? ++i : el;
    });
    return el;
  });

  return arr.join('');
}

function decode(str) {
  const letters = ['a', 'e', 'i', 'o', 'u'];
  let arr = str.split('').map(el => {
    letters.map((letter, i) => {
      el = el == ++i ? letter : el;
    });
    return el;
  });
  return arr.join('');
}

console.log(encode('hello'));
console.log(decode(encode('hello')));
