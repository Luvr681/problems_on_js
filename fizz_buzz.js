const gen = (number, word) => num => num % number === 0 ? word : '';
const fizz = gen(3, 'Fizz');
const buzz = gen(5, 'Buzz');

[...Array(99).keys()].map(i => i + 1).forEach(i => console.log(fizz(i) + buzz(i) || i));
