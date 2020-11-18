function draw(n){
  let str = "^", pr = "", result = [];
  for(let i = 0; i < n; i++){
    result.push(str);
    str += "^^";
  }
  result.reverse();
  for(let i = 0; i < n; i++){
    result[i] = result[i].split('');
    result[i] = [pr, ...result[i], pr];
    pr += ' ';
    result[i].join('');
  }
  result.reverse();
  for(let i = 0; i < n; i++){
    console.log(result[i].join(''));
  }
  return result;
}

function drawReverseImage(arr){
  arr = arr.reverse();
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i].join(''));
  }
}
drawReverseImage(draw(5))
drawReverseImage(draw(10))
