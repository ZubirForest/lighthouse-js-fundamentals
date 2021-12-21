const merge = (array1, array2) => {

  let combined = array1.concat(array2);

  combined.sort((a,b) => a - b);

  return combined;

};