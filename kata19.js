const generateBoard = (whiteQueen, blackQueen) => {

  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];

  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;

  return board;

};

const queenThreat = board => {

  let queen1 = [];
  let queen2 = [];

  let queenSwitch = 0;

  // determine coordinates of each queen
  for (let y = 0; y < board.length; y++) {

    for (let x = 0; x < board[y].length; x++) {

      if (board[y][x] === 1) {

        switch (queenSwitch) {

          case 0:
            queen1.push(y, x);
            queenSwitch = 1;
            break;
          
          case 1:
            queen2.push(y, x);

        }

      }

    }

  }

  if (queen1[0] === queen2[0] || queen1[1] === queen2[1] || Math.abs(queen1[0] - queen2[0]) === Math.abs(queen1[1] - queen2[1])) {

    return true;

  } else {

    return false;

  }

};