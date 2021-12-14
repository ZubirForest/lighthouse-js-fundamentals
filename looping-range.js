const range = function (start, end, step) {

  let array = [];

  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    
    return array;
  
  } else {

    for (let i = start; i <= end; i = i + step) {

      array.push(i);

    }

  }
  return array;
}

console.log(range(-9, 3, 3)); 