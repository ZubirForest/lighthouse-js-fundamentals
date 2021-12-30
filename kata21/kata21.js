// Our random number
const number = Math.floor(Math.random() * 100);

// Useful containers
let storedGuesses = [];
let numberOfGuesses = 0;
let successSwitch = 0;

let prompt = require("prompt-sync")();

// Guessing loop
while (successSwitch === 0) {

  let answer = prompt("Guess a number: ");

  // Exit program if user types 'exit' or 'quit'
  if (answer === 'exit' || answer === 'quit') {

    break;

  }

  const numberAnswer = Number(answer);

  // Check if number has already been guessed
  storedGuesses.forEach(guess => {

    if (numberAnswer === guess) {

      console.log('Already Guessed!');

    }

  })

  // Check if guess is too low, too high, not a number, or correct
  if (numberAnswer < number) {

    console.log('Too Low!');

  } else if (numberAnswer > number) {

    console.log('Too High!');

  } else if (isNaN(numberAnswer)) {

    console.log('Not a number! Try again!');

  } else if (numberAnswer === number) {

    console.log('You got it! You took ' + (numberOfGuesses + 1) + ' attempts!');
    successSwitch = 1;

  }

  //Store answer in an array, and add 1 to the number of guesses
  storedGuesses.push(numberAnswer);
  numberOfGuesses++;

}