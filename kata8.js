const repeatNumbers = array => {

  if (array.length === 1) {

    let output = '';

    for (let i = 1; i <= array[0][1]; i++) {
      
      let numToString = array[0][0];
      numToString.toString;
      output += numToString;

    }
  
  return output;

  } else {

    let output = '';

    for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {

      for (let subArrayCount = 1; subArrayCount <= array[arrayIndex][1]; subArrayCount++) {

        let numToString = array[arrayIndex][0];
        numToString.toString;
        output += numToString;

      }

      if (arrayIndex < array.length - 1) {

        output += ', ';

      }

    }

  return output;

  }

};