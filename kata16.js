const makeCase = (input, caseStyle) => {

  let multiCasedString = input;
  
  const camelCase = input => {

    let camelCasedString = '';
    let upperCaseSwitch = 0;
  
    for (let i = 0; i < input.length; i++) {
  
      if (upperCaseSwitch === 1) {
  
        camelCasedString += input[i].toUpperCase();
        upperCaseSwitch = 0;
  
      } else {
  
        if (input[i] === ' ') {
  
          upperCaseSwitch = 1;
  
        } else {
  
          camelCasedString += input[i];
  
        }
  
      }
  
    }
  
    return camelCasedString;
  
  };

  const pascalCase = input => {

    let pascalCasedString = '';
    let upperCaseSwitch = 0;
  
    for (let i = 0; i < input.length; i++) {
  
      if (upperCaseSwitch === 1 || i === 0) {
  
        pascalCasedString += input[i].toUpperCase();
        upperCaseSwitch = 0;
  
      } else {
  
        if (input[i] === ' ') {
  
          upperCaseSwitch = 1;
  
        } else {
  
          pascalCasedString += input[i];
  
        }
  
      }
  
    }
  
    return pascalCasedString;

  };

  const snakeCase = input => {

    let snakeCasedString = '';
  
    for (let i = 0; i < input.length; i++) {
  
      if (input[i] === ' ') {
  
        snakeCasedString += '_';
  
      } else {
  
        snakeCasedString += input[i];
  
      }
  
    }
  
    return snakeCasedString;

  };

  const kebabCase = input => {

    let kebabCasedString = '';
  
    for (let i = 0; i < input.length; i++) {
  
      if (input[i] === ' ') {
  
        kebabCasedString += '-';
  
      } else {
  
        kebabCasedString += input[i];
  
      }
  
    }
  
    return kebabCasedString;

  };

  const titleCase = input => {

    let titleCasedString = '';
    let upperCaseSwitch = 0;
  
    for (let i = 0; i < input.length; i++) {
  
      if (upperCaseSwitch === 1 || i === 0) {
  
        titleCasedString += input[i].toUpperCase();
        upperCaseSwitch = 0;
  
      } else {
  
        if (input[i] === ' ') {
  
          titleCasedString += ' ';
          upperCaseSwitch = 1;
  
        } else {
  
          titleCasedString += input[i];
  
        }
  
      }
  
    }
  
    return titleCasedString;

  };

  const vowelCase = input => {

    let vowelCasedString = '';
  
    for (let i = 0; i < input.length; i++) {
  
      if ((input[i] === 'a') || (input[i] === 'e') || (input[i] === 'i') || (input[i] === 'o') || (input[i] === 'u')) {
  
        vowelCasedString += input[i].toUpperCase();
  
      } else {
  
        vowelCasedString += input[i];
  
      }
  
    }
  
    return vowelCasedString;

  };

  const consonantCase = input => {

    let consonantCasedString = '';
  
    for (let i = 0; i < input.length; i++) {
  
      if (!((input[i] === 'a') || (input[i] === 'e') || (input[i] === 'i') || (input[i] === 'o') || (input[i] === 'u'))) {
  
        consonantCasedString += input[i].toUpperCase();
  
      } else {
  
        consonantCasedString += input[i];
  
      }
  
    }
  
    return consonantCasedString;

  };

  const upperCase = input => {

    let upperCasedString = '';
  
    for (let i = 0; i < input.length; i++) {
  
      upperCasedString += input[i].toUpperCase();
  
    }
  
    return upperCasedString;
  
  };

  const lowerCase = input => {

    let lowerCasedString = '';
  
    for (let i = 0; i < input.length; i++) {
  
      lowerCasedString += input[i].toLowerCase();
  
    }
  
    return lowerCasedString;
  
  };
  
  if (typeof caseStyle === 'object') {
    
    for (let i = 0; i < caseStyle.length; i++) {

      switch (caseStyle[i]) {

        case 'camel':
          multiCasedString = camelCase(multiCasedString);
          break;

        case 'pascal':
          multiCasedString = pascalCase(multiCasedString);
          break;

        case 'snake':
          multiCasedString = snakeCase(multiCasedString);
          break;

        case 'kebab':
          multiCasedString = kebabCase(multiCasedString);
          break;
        
        case 'title':
          multiCasedString = titleCase(multiCasedString);
          break;
        
        default:
          break;

      }

    }

    for (let i = 0; i < caseStyle.length; i++) {

      switch (caseStyle[i]) {

        case 'vowel':
          multiCasedString = vowelCase(multiCasedString);
          break;

        case 'consonant':
          multiCasedString = consonantCase(multiCasedString);
          break;

        default:
          break;

      }

    }

    for (let i = 0; i < caseStyle.length; i++) {

      switch (caseStyle[i]) {

        case 'upper':
          multiCasedString = upperCase(multiCasedString);
          break;

        case 'lower':
          multiCasedString = lowerCase(multiCasedString);
          break;

      }

    }

    return multiCasedString;

  }
  
  switch (caseStyle) {

    case 'camel':
      return camelCase(input);
    
    case 'pascal':
      return pascalCase(input);

    case 'snake':
      return snakeCase(input);

    case 'kebab':
      return kebabCase(input);

    case 'title':
      return titleCase(input);

    case 'vowel':
      return vowelCase(input);
    
    case 'consonant':
      return consonantCase(input);
    
    case 'upper':
      return upperCase(input);

    case 'lower':
      return lowerCase(input);

  }

};