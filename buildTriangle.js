// Builds a line of asterisks with a base of width equal to the argument passed


// Take in a line length, builds a line of asterisks, and returns this as a newline
function makeLine(length) {
  
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";

}

// Builds the entire triangle out of lines from makeLine()
function buildTriangle(argument) {
  
  var finalLine = '';
  for (var counter = 1; counter <= argument; counter++) {
    
    finalLine += makeLine(counter);

  }
  return finalLine;
}

// Calls and prints build function
console.log(buildTriangle(10));