import Movement from '../../records/Movement';
import reduceMovements from './reduceMovements';
import isAPosibleMovement from './isAPosibleMovement';


function getBishopMovements({ positionX: posX, positionY: posY, piece, table }) {

  let topLeftMoves = [];
  let i = posX;
  let j = posY;

  while(true) {
    i--;
    j--;
    const move = isAPosibleMovement(table, piece, i, j);
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
    const move = isAPosibleMovement(table, piece, i, j);
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
    const move = isAPosibleMovement(table, piece, i, j);
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
    const move = isAPosibleMovement(table, piece, i, j);
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

export default (data) => getBishopMovements(data);
