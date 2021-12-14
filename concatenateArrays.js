const concat = function (array1, array2) {

  let combinedArray = array1;
  array2.forEach(element => combinedArray.push(element));
  return combinedArray;
    
};

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));