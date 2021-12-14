const lastIndexOf = function (array, value) {

  let lastIndex;
  
  for (let i = 0; i < array.length; i++) {

    if (array[i] === value) {

      lastIndex = i;

    }

  }

if (lastIndex >= 0) {

  return lastIndex;

} else {

  return -1;

}

}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));