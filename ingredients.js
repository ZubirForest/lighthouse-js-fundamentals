const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log('While loop:\n');

let i = 0;
while (i < ingredients.length) {

  console.log(ingredients[i]);
  i++;

}

console.log('\n\n');
// Write a for loop that prints out the contents of ingredients:
console.log('For loop:\n');

for (let i2 = 0; i2 < ingredients.length; i2++) {

  console.log(ingredients[i2]);

}

console.log('\n\n');
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log('Count backwards:\n');

for (let i3 = (ingredients.length - 1); i3 >= 0; i3--) {

  console.log(ingredients[i3]);

}