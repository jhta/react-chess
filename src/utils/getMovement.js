import getPawnBlackMovements from './movements/pawnBlack';
import getPawnWhiteMovements from './movements/pawnWhite';
import getKnightMovements from './movements/knight';
import getRookMovements from './movements/rook';
import getBishopMovements from './movements/bishop';
import { fromJS } from 'immutable';

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

    default:
    return table;
  }
}

export default getMovement;
