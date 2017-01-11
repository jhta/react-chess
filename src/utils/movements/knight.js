import Movement from '../../records/Movement';
import reduceMovements from './reduceMovements';

function getPownMovements(i, j, piece, table) {

  const crudeMoves = [
    {
      moveX: i - 1,
      moveY: j + 2,
    },
    {
      moveX: i - 1,
      moveY: j - 2,
    },
    {
      moveX: i + 1,
      moveY: j - 2,
    },
    {
      moveX: i + 1,
      moveY: j + 2,
    },
    {
      moveX: i - 2,
      moveY: j + 1,
    },
    {
      moveX: i - 2,
      moveY: j - 1,
    },
    {
      moveX: i + 2,
      moveY: j + 1,
    },
    {
      moveX: i + 2,
      moveY: j - 1,
    },

  ];

  const moves = crudeMoves
    .map((move) => new Movement(move)
    .toJS()
  );
  return reduceMovements(table, moves, piece);
}

export default (i, j, piece, table) => {
  return getPownMovements(i, j, piece, table);
}
