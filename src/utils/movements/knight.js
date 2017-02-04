import Movement from '../../records/Movement';
import reduceMovements from './reduceMovements';

/**
 * get the avalible movments for Knigth piece
 * @param  {Number} posX  vertical positon in table
 * @param  {Number} posY  horizontal position in table
 * @param  {Object} piece Actual piece
 * @param  {List} table immutable List
 * @return {List}       table with the new avalible positions
 */
function getKnightMovements({ positionX: posX, positionY: posY, piece, table }) {

  const crudeMoves = [];

  for (let i = -2; i <= 2; i++) {
    if (i === 0) continue;
    const j = 3 - Math.abs(i);
    crudeMoves.push({
      moveX: posX + i,
      moveY: posY + j,
    });

    crudeMoves.push({
      moveX: posX + i,
      moveY: posY - j,
    });
  }

  const moves = crudeMoves
    .map((move) => new Movement(move)
    .toJS()
  );
  return reduceMovements(table, moves, piece);
}

export default (data) => getKnightMovements(data);
