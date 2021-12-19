const sumLargestNumbers = data => {

  // Function to take the largest number in our future-sorted array, in arrow notation.
  const lastIndex = array => {
    return array[array.length - 1];
  }

  // Function to take the second largest number in our future-sorted array, in arrow notation.
  const secondLastIndex = array => {
    return array[array.length - 2];
  }

  // Sort the list and store. This version of sort orders numbers properly, so that ex. 10 does not come before 2.
  const sorted = data.sort((a, b) => a - b);

  // Sum these two numbers and return
  return lastIndex(sorted) + secondLastIndex (sorted);

}

console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));