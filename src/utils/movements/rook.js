import Movement from '../../records/Movement';
import reduceMovements from './reduceMovements';
import isAPosibleMovement from './isAPosibleMovement';


function getRookMovements({ positionX: posX, positionY: posY, piece, table }) {

  let topMoves = [];
  let i = 0;
  for (i = posX - 1; i>= 0; i--) {
    const move = isAPosibleMovement(table, piece, i, posY);
    if (!move) break;
    if (move.break) {
      topMoves.push(move.move);
      break;
    }
    topMoves.push(move.move);
  }

  let bottomMoves = [];

  for (i = posX + 1; i <= 7; i++) {
    const move = isAPosibleMovement(table, piece, i, posY);
    if (!move) break;
    if (move.break) {
      bottomMoves.push(move.move);
      break;
    }
    bottomMoves.push(move.move);
  }


  let leftMoves = [];

  for (i = posY - 1; i >= 0; i--) {
    const move = isAPosibleMovement(table, piece, posX, i);
    if (!move) break;
    if (move.break) {
      leftMoves.push(move.move);
      break;
    }
    leftMoves.push(move.move);
  }


  let rightMoves = [];

  for (i = posY + 1; i <= 7; i++) {

    const move = isAPosibleMovement(table, piece, posX, i);
    if (!move) break;
    if (move.break) {
      rightMoves.push(move.move);
      break;
    }
    rightMoves.push(move.move);
  }



  const moves = [...leftMoves, ...rightMoves, ...topMoves, ...bottomMoves]
    .map((move) => new Movement(move)
    .toJS()
  );
  return reduceMovements(table, moves, piece);
}

export default (data) => getRookMovements(data);
