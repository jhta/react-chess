import getRookMovements from './rook';
import getBishopMovements from './bishop';


export default ({ positionX, positionY, piece, table }) => getRookMovements({
  positionX,
  positionY,
  piece,
  table: getBishopMovements({
    positionX,
    positionY,
    piece,
    table
  })
});
