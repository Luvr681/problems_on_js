function tripleX(str){
  let x = str.indexOf('x')
  return x > -1 && x === str.indexOf('xxx')   
}

console.log(tripleX("abraxxxas"))//,true);
console.log(tripleX("xoxotrololololololoxxx"))//,false);
console.log(tripleX("soft kitty, warm kitty, xxxxx"))//,true);
console.log(tripleX("soft2x kitty, warm kitty, xxxxx"))//,false);
