import getPawnBlackMovements from './movements/pawnBlack';
import getPawnWhiteMovements from './movements/pawnWhite';
import getKnightMovements from './movements/knight';
import getRookMovements from './movements/rook';
import getBishopMovements from './movements/bishop';
import getQueenMovements from './movements/queen';
import { fromJS } from 'immutable';

/**
 * switch for select the posible movements options for the piece
 * @param  {Object} piece
 * @param  {Number} positionX  row
 * @param  {Number} positionY  column
 * @param  {Object} table      immutable table object
 * @return {Object}            table with avalibles movements
 */
function getMovement({piece, positionX, positionY}, table) {

  const data = {
    positionX,
    positionY,
    piece: fromJS(piece),
    table
  };

  switch (piece.name) {
    case 'pawn_black':
      return getPawnBlackMovements(data);

    case 'pawn_white':
      return getPawnWhiteMovements(data);

    case 'knight_black':
      return getKnightMovements(data);

    case 'knight_white':
      return getKnightMovements(data);

    case 'rook_black':
      return getRookMovements(data);

    case 'rook_white':
      return getRookMovements(data);

    case 'bishop_white':
      return getBishopMovements(data);

    case 'bishop_black':
      return getBishopMovements(data);

    case 'queen_black':
      return getQueenMovements(data);

    case 'queen_white':
      return getQueenMovements(data);

    default:
    return table;
  }
}

export default getMovement;
