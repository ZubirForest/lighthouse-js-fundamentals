const urlEncode = text => {
  
  let encodedString = '';
  
  for (let i = 0; i < text.length; i++) {

    if ((text[i] === ' ') && (i < text.length - 1) && (i > 0)) {

      encodedString += '%20';

    } else {

      encodedString += text[i];

    }

  }

  return encodedString;

};