import Movement from '../../records/Movement';
import reduceMovements from './reduceMovements';

function getPownMovements(posX, posY, piece, table) {

  let topMoves = [];
  let i = 0;
  for (i = posX - 1; i>= 0; i--) {
    if (i < 0) break;
    if (table.get(i).get(posY).get('piece')) {
    //  debugger
      const auxPiece = table.get(i).get(posY).get('piece').toJS();
      if (auxPiece.color === piece.get('color')) {
        break;
      } else {
        topMoves.push({
          moveX: i,
          moveY: posY,
        });
        break;
      }
    }
    topMoves.push({
      moveX: i,
      moveY: posY
    });
  }



  let bottomMoves = [];

  for (i = posX + 1; i <= 7; i++) {
    if (i > 7) break;
    if (table.get(i).get(posY).get('piece')) {
      let auxPiece = table.get(i).get(posY).get('piece').toJS();
      if (auxPiece.color === piece.get('color')) {
        break;
      } else {
        bottomMoves.push({
          moveX: i,
          moveY: posY,
        });
        break;
      }
    }
    bottomMoves.push({
      moveX: i,
      moveY: posY
    });
  }



  let leftMoves = [];

  for (i = posY - 1; i >= 0; i--) {
    if (i < 0) break;
    if (table.get(posX).get(i).get('piece')) {
      let auxPiece = table.get(posX).get(i).get('piece').toJS();
      if (auxPiece.color === piece.get('color')) {
        break;
      } else {
        leftMoves.push({
          moveX: posX,
          moveY: i,
        });
        break;
      }
    }
    leftMoves.push({
      moveX: posX,
      moveY: i,
    });
  }


  let rightMoves = [];

  for (i = posY + 1; i <= 7; i++) {
    if (i > 7) break;
    if (table.get(posX).get(i).get('piece')) {
      let auxPiece = table.get(posX).get(i).get('piece').toJS();
      if (auxPiece.color === piece.get('color')) {
        break;
      } else {
        rightMoves.push({
          moveX: posX,
          moveY: i,
        });
        break;
      }
    }
    rightMoves.push({
      moveX: posX,
      moveY: i
    });
  }



  const moves = [...leftMoves, ...rightMoves, ...topMoves, ...bottomMoves]
    .map((move) => new Movement(move)
    .toJS()
  );
  return reduceMovements(table, moves, piece);
}

export default (i, j, piece, table) => {
  return getPownMovements(i, j, piece, table);
}
