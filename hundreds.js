const howManyHundreds = function (num) {

  let remainder = num % 100;
  let hundreds = (num - remainder) / 100;
  return hundreds;  

}

console.log(howManyHundreds(894));