import Movement from '../../records/Movement';
import reduceMovements from './reduceMovements';

function getPownMovements(i, j, piece, table) {
  const frontMove = new Movement({
    moveX: i - 1,
    moveY: j,
  }).toJS();

  let initialMove = {};
  if (i === 1) {
    initialMove = new Movement({
      moveX: i - 2,
      moveY: j,
      condition: piece ?
       piece.get('firstMovement')
       :
       false,
    }).toJS();
  }

  const killMoves = [
    new Movement({
      moveX: i - 1,
      moveY: j - 1,
      justKill: true,
    }).toJS(),
    new Movement({
      moveX: i - 1,
      moveY: j + 1,
      justKill: true,
    }).toJS()
  ];

  const moves = [frontMove, initialMove, ...killMoves];
  return reduceMovements(table, moves, piece);
}

export default (i, j, piece, table) => {
  return getPownMovements(i, j, piece, table);
}
