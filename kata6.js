const whereCanIPark = (spots, vehicle) => {
  
  switch (vehicle) {

    case 'regular':
      for (let y = 0; y < spots.length; y++) {
        for (let x = 0; x < spots[y].length; x++) {
          if (spots[y][x] === 'R') {
            return [x,y];
          };
        };
      };
      break;

    case 'small':
      for (let y = 0; y < spots.length; y++) {
        for (let x = 0; x < spots[y].length; x++) {
          if (spots[y][x] === 'R' || spots[y][x] === 'S') {
            return [x,y];
          };
        };
      };
      break;

    case 'motorcycle':
      for (let y = 0; y < spots.length; y++) {
        for (let x = 0; x < spots[y].length; x++) {
          if (spots[y][x] === 'R' || spots[y][x] === 'S' || spots[y][x] === 'M') {
            return [x,y];
          };
        };
      };
      break;

  };

  return false;

};