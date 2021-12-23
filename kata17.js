const urlDecode = text => {

  // Useful containers
  let decodedObject = {};
  let keyIndexArray = [];

  // Log important key indicator indices in the array initialized above
  for (let i = 0; i < text.length; i++) {

    if (text[i] === '=') {
      keyIndexArray.push(i);
    } else if (text[i] === '&') {
      keyIndexArray.push(i);
    }

  }

  // Single-key arguments:
  if (keyIndexArray.length === 1) {

    // Capture key string in a variable
    const key = text.slice(0, keyIndexArray[0]);

    // Capture encoded value string in a variable
    // Begin at the index + 1 of our first '='
    let preValue = text.slice(keyIndexArray[0] + 1);
    
    // Decode our value string
    let decodedValue = '';
    for (let i = 0; i < preValue.length; i++) {

      if (preValue[i] === '%') {

        decodedValue += ' ';
        // Skip iteration over the next two characters ('2' and '0')
        i += 2;

      } else {

        decodedValue += preValue[i];

      }

    }
    
    decodedObject[key] = decodedValue;

    return decodedObject;

  
  } 
  
  // Multi-key arguments:
  // ** NOTE ** This is hardcoded for up to two key:value pairs only!
  else if (keyIndexArray.length > 1) {

    // ** KEY:VALUE 1 **
    
    // Capture key string in a variable
    // Remember, keyIndexArray will look like this: [(index for first '='), (index for '&'), (index for second '=')]
    const key1 = text.slice(0, keyIndexArray[0]);

    // Capture encoded value string in a variable
    // Begin at the index + 1 of our first '=', and end at the index of '&' (exclusive)
    let preValue1 = text.slice(keyIndexArray[0] + 1, keyIndexArray[1]);

    // Decode our value string
    let decodedValue1 = '';
    for (let i = 0; i < preValue1.length; i++) {

      if (preValue1[i] === '%') {

        decodedValue1 += ' ';
        // Skip iteration over the next two characters ('2' and '0')
        i += 2;

      } else {

        decodedValue1 += preValue1[i];

      }

    }

    decodedObject[key1] = decodedValue1;

    // ** KEY:VALUE 2 **
    
    // Capture key string in a variable
    // Remember, keyIndexArray will look like this: [(index for first '='), (index for '&'), (index for second '=')]
    const key2 = text.slice(keyIndexArray[1] + 1, keyIndexArray[2]);

    // Capture encoded value string in a variable
    // Begin at the index + 1 of our second '='... no need to stipulate end
    let preValue2 = text.slice(keyIndexArray[2] + 1);

    // Decode our value string
    let decodedValue2 = '';
    for (let i = 0; i < preValue2.length; i++) {

      if (preValue2[i] === '%') {

        decodedValue2 += ' ';
        // Skip iteration over the next two characters ('2' and '0')
        i += 2;

      } else {

        decodedValue2 += preValue2[i];

      }

    }

    decodedObject[key2] = decodedValue2;
    return decodedObject;

  }

};