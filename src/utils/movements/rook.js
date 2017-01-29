import Movement from '../../records/Movement';
import reduceMovements from './reduceMovements';

function getPownMovements(posX, posY, piece, table) {

  const wayIsBlocked = {
    top: false,
    bottom: false,
    left: false,
    right: false,
  };

  /*const arrayLeft = new Array((0 - posX)).fill(0);
  function addMovement(array, table, direction) {
    if (direction === 'left') {

    }
  } */

  const horizontalMoves = new Array(8).fill(0)
    .map((val, i) => {
      if (i !== posX) {
        return {
          moveX: i,
          moveY: posY,
        }
      }
  });

  const verticalMoves = new Array(8).fill(0)
    .map((val, j) => {
      if (j !== posY) {
        return {
          moveX: posX,
          moveY: j,
        }
      }
  });


  const moves = [...verticalMoves, ...horizontalMoves]
    .map((move) => new Movement(move)
    .toJS()
  );
  return reduceMovements(table, moves, piece);
}

export default (i, j, piece, table) => {
  return getPownMovements(i, j, piece, table);
}
