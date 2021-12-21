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