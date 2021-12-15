
// Function to determine who submitted the winning veggie, depending on metric
const judgeVegetable = function (veggies, judgementCriteria) {

  // Empty variables to store useful information going forward
  let scores = [];
  let winner = undefined;

  // Put all the important metric values in a single array, defined above
  for (let i = 0; i < veggies.length; i++) {
    
    let object = veggies[i];
    scores.push(object[judgementCriteria]);
    
  };


  // Sort the array using a special syntax so ex. 10 < 2 in the order (from MDN documentation) 
  scores.sort(function(a, b) {
    
    return a - b;

  });

  // Take the highest value of this array of sorted scores, which is the last index value
  // We don't know what that index is though, so we have to use the length minus 1
  let winningScore = scores[(scores.length - 1)];

  // Take the winning score, and go back to the objects and figure out which one contained it
  // by looping through them until we have a match
  for (let i = 0; i < veggies.length; i++) {

    let object = veggies[i];
    //
    if (winningScore === object[judgementCriteria]) {
      // We have a match! Now take the submitter's name from this object
      winner = object['submitter'];

    }

  }
  // And return the winner's name
  return winner;

}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));