const blocksAway = directions => {

  let position = [0, 0];
  
  let finalDestination = {
    east: 0,
    north: 0
  };

  let previousDirection = '';

  for (let i = 0; i < directions.length; i++) {
 
    if (i % 2 === 0) {

      if (directions[i] === 'right') {

        switch (previousDirection) {

          case 'north':
            previousDirection = 'east';
            break;

          case 'east':
            previousDirection = 'south';
            break;

          case 'south':
            previousDirection = 'west';
            break;

          case 'west':
            previousDirection = 'north';
            break;

          case '':
            previousDirection = 'east';

        }

      } else if (directions[i] === 'left') {

        switch (previousDirection) {

          case 'north':
            previousDirection = 'west';
            break;

          case 'east':
            previousDirection = 'north';
            break;

          case 'south':
            previousDirection = 'east';
            break;

          case 'west':
            previousDirection = 'south';
            break;

          case '':
            previousDirection = 'north';

        }

      }

    } else {

      switch (previousDirection) {

        case 'north':
          position[1] += directions[i];
          break;

        case 'east':
          position[0] += directions[i];
          break;

        case 'south':
          position[1] -= directions[i];
          break;

        case 'west':
          position[0] -= directions[i];
          break;

      }

    }

  }

  finalDestination.east = position[0];
  finalDestination.north = position[1];

  return finalDestination;

};