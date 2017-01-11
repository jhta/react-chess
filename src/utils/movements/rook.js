import Movement from '../../records/Movement';
import reduceMovements from './reduceMovements';

function getPownMovements(posX, posY, piece, table) {


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
      debugger
      if (j !== posY) {
        debugger
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
