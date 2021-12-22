const calculateChange = (total, cash) => {

  let remainder = cash - total;
  const change = {};

  while (remainder > 0) {

    if (remainder >= 2000) {
      
      if (change.twentyDollar === undefined) {
        
        change.twentyDollar = 1;
        remainder -= 2000;
      } else {
        change.twentyDollar += 1;
        remainder -= 2000;
      }
        
    } else if (remainder >= 1000 && remainder < 2000) {
        
      change.tenDollar = 1;
      remainder -= 1000;

    } else if (remainder >= 500 && remainder < 1000) {

      change.fiveDollar = 1;
      remainder -= 500;

    } else if (remainder >= 200 && remainder < 500) {

      if (change.twoDollar === undefined) {

        change.twoDollar = 1;
        remainder -= 200;

      } else {

        change.twoDollar += 1;
        remainder -=200;

      }

    } else if (remainder >= 100 && remainder < 200) {

      change.oneDollar = 1;
      remainder -= 100;

    } else if (remainder >= 25 && remainder < 100) {

      if (change.quarter === undefined) {

        change.quarter = 1;
        remainder -= 25;

      } else {

        change.quarter += 1;
        remainder -= 25;

      }

    } else if (remainder >= 10 && remainder < 25) {

      if (change.dime === undefined) {

        change.dime = 1;
        remainder -= 10;

      } else {

        change.dime += 1;
        remainder -= 10;

      }

    } else if (remainder >= 5 && remainder < 10) {

      change.nickel = 1;
      remainder -= 5;

    } else {

      if (change.penny === undefined) {

        change.penny = 1;
        remainder -= 1;

      } else {

        change.penny += 1;
        remainder -= 1;

      }

    }

  }

return change;

};