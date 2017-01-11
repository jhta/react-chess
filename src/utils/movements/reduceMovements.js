import validateRange from './validateRange';
import switchAvalibleSquare from './switchAvalibleSquare';


export default (table, moves, piece) => moves
  .reduce((acumTable, currentMove) => {
    const {
      moveX,
      moveY,
      justKill,
    } = currentMove;

    if (!validateRange(moveX, moveY)) return acumTable;
    if (!currentMove.condition) return acumTable;
    const square = acumTable.get(moveX).get(moveY);
    return switchAvalibleSquare(
      moveX,
      moveY,
      acumTable,
      square,
      justKill,
      piece,
    );

  },
  table
  );
