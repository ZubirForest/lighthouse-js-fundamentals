const numberOfVowels = data => {

  let vowels = '';
  
  for (let i = 0; i < data.length; i++) {
    
    if (data[i] === 'a') {
      vowels += data[i];
    } else if (data[i] === 'e') {
      vowels += data[i];
    } else if (data[i] === 'i') {
      vowels += data[i];
    } else if (data[i] === 'o') {
      vowels += data[i];
    } else if (data[i] === 'u') {
      vowels += data[i];
    };
  };

  return vowels.length;

};