const instructorWithLongestName = instructors => {

  let longest = 0;
  let objectIndex;
  
  for (let i = 0; i < instructors.length; i++) {

    const nameString = instructors[i].name;

    if (nameString.length > longest) {
      longest = nameString.length;
      objectIndex = i;
    };
    
  };

  return instructors[objectIndex];

};