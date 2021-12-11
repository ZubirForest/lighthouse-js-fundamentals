
// Choose voting stations that have a capacity of at least 20, and are a school or community centre
const chooseStations = function (stations) {

  // Create a variable to hold stations that will satisfy our criteria 
  let adequateStations = [];
  
  // Iterate through the passed array argument to find array indices that satisfy
  for (let groupIndex = 0; groupIndex <= stations.length - 1; groupIndex++) {

    // Initialize variables that will communicate whether array is adequate. Scope is in wider of two 'for' loops only
    let capacityPassed;
    let buildingPassed;

    // Because we are passed an array of arrays, we need to loop through the nested array
    // Start at index 1 instead of 0 because capacity is at [1] and type is at [2]
    for (let arrayIndex = 1; arrayIndex <= stations[groupIndex].length - 1; arrayIndex++) {

      // If we are at the capacity index of the array
      if (arrayIndex === 1) {
        
        // And if the capacity is at least 20
        if (stations[groupIndex][arrayIndex] >= 20) {
          
          // Then store this result in the capacity adequacy variable from earlier
          capacityPassed = true;

        } else {
          
          capacityPassed = false;

        }

      }
      
      // If we are at the building-type index of the array
      if (arrayIndex === 2) {

        // And if the building type is a school or a community centre
        if (stations[groupIndex][arrayIndex] === 'school' || stations[groupIndex][arrayIndex] === 'community centre') {

          // Then store this result in the building adequacy variable from before
          buildingPassed = true;

        } else {
          
          buildingPassed = false;

        }

      }

    }

    // Once we have iterated through this child array inside our parent array, if it is adequate, then
    // push its name into our own array, which holds past and/or future adequate stations as well 
    if (capacityPassed && buildingPassed) {
      
      adequateStations.push(stations[groupIndex][0]);

    }

  }

  // Exit the function with our array of passable stations
  return adequateStations;

}

const stations = [
  ['A', 10, 'school'],
  ['B', 9, 'restaurant'],
  ['C', 21, 'community centre'],
  ['D', 15, 'school'],
  ['E', 50, 'restaurant'],
  ['F', 20, 'school'],
  ['G', 40, 'community centre'],
  ['H', 50, 'school'],
];

console.log(chooseStations(stations));