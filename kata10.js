const multiplicationTable = maxValue => {

  let stepper = 1;

  let motherString = '';
  
  while (stepper <= maxValue) {

    for (let x = stepper; x <= maxValue * stepper; x += stepper) {

      if (x === maxValue * stepper) {

        motherString += x.toString() + '\n';

      } else {

        motherString += x.toString() + ' ';

      }

    }

    stepper++;

  }

  return motherString;

};