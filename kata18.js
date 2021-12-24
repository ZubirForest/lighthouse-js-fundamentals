const squareCode = message => {

  // Declare some useful variables
  let squareEncoded = '';
  let encodedArray = [];
  let squareArray = [];
  let noSpaces = '';

  // Remove spaces from our passed argument, aka our unencoded message
  for (let i = 0; i < message.length; i++) {

    if (message[i] !== ' ') {

      noSpaces += message[i];

    }

  }
  
  // Determine how many columns our square unencoded array will have
  const numColumns = (Math.ceil(Math.sqrt(noSpaces.length)));
  // Determine how many rows our square unencoded array will have
  const numRows = (Math.ceil(noSpaces.length / numColumns));

  // Create containers sized to fit our future encoded separate strings (we will unite them later)
  for (let i = 0; i < numColumns; i++) {

    encodedArray.push([]);

  }
  
  // Slice up our unencoded message to make a square array
  for (let i = 1; i <= numRows; i++) {

    // Each section will be as wide as our number of columns

    // First section always begins at [0], and ends at the same index as (number of columns - 1)
    // Because of zero-indexing, the end parameter on our slice will be numColumns, because slice's end parameter is exclusive
    if (i === 1) {
      
      squareArray.push(noSpaces.slice(0, numColumns));

    // Each slice after the first and before the last will be of numColumns width, and be located (numColumns *) i away from the beginning of the message
    } else if (i > 1 && i < numRows) {

      squareArray.push(noSpaces.slice(numColumns * (i - 1), numColumns * i));

    // The final slice will always begin at (numRows - 1) distance from the beginning of the message
    // We don't need an end parameter because we just want whatever's left
    } else if (i === numRows) {

      squareArray.push(noSpaces.slice(numColumns * (i - 1)));

    }

  }

  // Drop each square array index's characters into their respective buckets, one by one
  squareArray.forEach(index => {

    for (let i = 0; i < index.length; i++) {

      encodedArray[i] += index[i];

    }

  })

  // Store each encoded  
  for (let i = 0; i < encodedArray.length; i++) {

    if (encodedArray[i] !== encodedArray.length - 1) {

      squareEncoded += encodedArray[i] + ' ';

    } else {

      squareEncoded += encodedArray[i];

    }

  }

  return squareEncoded;

};