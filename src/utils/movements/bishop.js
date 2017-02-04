import Movement from '../../records/Movement';
import reduceMovements from './reduceMovements';

function addMove(table, piece, row, column) {
  if (row < 0 || row > 7) return false;
  if (column < 0 || column > 7) return false;

  const auxPiece = table.get(row).get(column).get('piece');
  if (auxPiece) {
    if (auxPiece.color === piece.get('color')) return false;
    return {
      move: {
        moveX: row,
        moveY: column,
      },
      break: true
    };
  }

  return {
    move: {
      moveX: row,
      moveY: column
    },
    break: false,
  };


}

function getPownMovements({ positionX: posX, positionY: posY, piece, table }) {

  let topLeftMoves = [];
  let i = posX;
  let j = posY;

  while(true) {
    i--;
    j--;
    const move = addMove(table, piece, i, j);
    if (!move) break;
    if (move.break) {
      topLeftMoves.push(move.move);
      break;
    }
    topLeftMoves.push(move.move);
  }


  let topRightMoves = [];
  i = posX;
  j = posY;

  while(true) {
    i--;
    j++;
    const move = addMove(table, piece, i, j);
    if (!move) break;
    if (move.break) {
      topRightMoves.push(move.move);
      break;
    }
    topRightMoves.push(move.move);
  }

  let bottomLeftMoves = [];
  i = posX;
  j = posY;

  while(true) {
    i++;
    j--;
    const move = addMove(table, piece, i, j);
    if (!move) break;
    if (move.break) {
      bottomLeftMoves.push(move.move);
      break;
    }
    bottomLeftMoves.push(move.move);
  }


  let bottomRightMoves = [];
  i = posX;
  j = posY;

  while(true) {
    i++;
    j++;
    const move = addMove(table, piece, i, j);
    if (!move) break;
    if (move.break) {
      bottomRightMoves.push(move.move);
      break;
    }
    bottomRightMoves.push(move.move);
  }



  const moves = [...topLeftMoves, ...topRightMoves, ...bottomLeftMoves, ...bottomRightMoves]
    .map((move) => new Movement(move)
    .toJS()
  );
  return reduceMovements(table, moves, piece);
}

export default (data) => getPownMovements(data);
