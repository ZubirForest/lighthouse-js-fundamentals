const organizeInstructors = instructors => {

  let organizedCourses = {};

  instructors.forEach(object => {
  
    let temp = object.course;
    if (!organizedCourses[temp]) {

      organizedCourses[temp] = [];
      organizedCourses[temp].push(object.name);

    } else {

      organizedCourses[temp].push(object.name);

    }

  })

  return organizedCourses;

};