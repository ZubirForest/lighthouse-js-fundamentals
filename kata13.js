const talkingCalendar = date => {

  let yearv1 = date.slice(0,4);
  let monthv1 = date.slice(5,7);
  let dayv1 = date.slice(8);

  const monthObject = {
  
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'

  };
  
  const suffixFunction = day => {

    switch (day) {
      
      case '01':
        return 'st';
        
      case '02':
        return 'nd';
     
      case '03':
        return 'rd';
    
      default:
        return 'th';
    
    }

  };

  const dayFunction = day => {

    if (day[0] === '0') {

      day = day.slice(1);
      return day;

    } else {

      return day;

    }

  };

  const monthFunction = month => {

    if (month[0] === '0') {

      month = month.slice(1);

    }

    return monthObject[month];

  };

  const monthv2 = monthFunction(monthv1);
  const suffix = suffixFunction(dayv1);
  const dayv2 = dayFunction(dayv1);

  const finalDate = monthv2 + ' ' + dayv2 + suffix + ', ' + yearv1;

  return finalDate;
  
};