import getPawnBlackMovements from './movements/pawnBlack';
import getPawnWhiteMovements from './movements/pawnWhite';
import getKnightMovements from './movements/knight';
import getRookMovements from './movements/rook';
import { fromJS } from 'immutable';

function getMovement({piece, positionX, positionY}, table) {
  switch (piece.name) {
    case 'pawn_black':
      return getPawnBlackMovements(
        positionX,
        positionY,
        fromJS(piece),
        table
      );
    case 'pawn_white':
      return getPawnWhiteMovements(
        positionX,
        positionY,
        fromJS(piece),
        table
      );
    case 'knight_black':
      return getKnightMovements(
        positionX,
        positionY,
        fromJS(piece),
        table
      );
    case 'knight_white':
      return getKnightMovements(
        positionX,
        positionY,
        fromJS(piece),
        table
      );
    case 'rook_black':
      debugger
      return getRookMovements(
        positionX,
        positionY,
        fromJS(piece),
        table
      );

    default:
    return table;
  }
}

export default getMovement;
