function moreZeros(s :string) :string[] {
  let arr :any = s.split('');
  let set = new Set();
  arr.forEach((el :string) => set.add(el));
  arr = [...set].map((el :any) => el.charCodeAt(0).toString(2).split(''));
  for (let i = 0; i < arr.length; i++) {
    let cOne :number = 0;
    let cTwo :number = 0;
    arr[i].forEach((el :string) => Number(el) == 0 ? cOne++ : cTwo++);
    arr[i] = cOne > cTwo ? String.fromCharCode(parseInt(arr[i].join(''), 2)) : '';
  }
  return arr.filter((el :string) => el);
}

console.log(moreZeros('abcde'));
