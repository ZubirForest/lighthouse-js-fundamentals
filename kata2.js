const conditionalSum = (values, condition) => {

  // Empty variable to hold numbers that match our condition
  let sum = 0;

  // Split logic up into our two possible conditions
  switch(condition) {
    
    case 'even':
      for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 === 0) {
          sum += values[i];
        } 
      }
      break;

    case 'odd':
      for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 > 0) {
          sum += values[i];
        }  
      }
      break;
  };

  // Have the function output the sum of the numbers that matched the condition
  return sum;

};