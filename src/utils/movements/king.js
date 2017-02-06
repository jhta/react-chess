import Movement from '../../records/Movement';
import reduceMovements from './reduceMovements';
import validateRange from './validateRange';


function getBishopMovements({ positionX: posX, positionY: posY, piece, table }) {

  let moves = [];
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (!validateRange(i, j)) continue;
      if (i === 0 && j === 0) continue;
      moves.push({
        moveX: posX + i,
        moveY: posY + j,
      })
    }
  }
  moves = moves
    .map((move) => new Movement(move)
    .toJS()
  );
  return reduceMovements(table, moves, piece);
}

export default (data) => getBishopMovements(data);
