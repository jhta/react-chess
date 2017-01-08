import RookBlack from './pieces/RookBlack';
import QueenBlack from './pieces/QueenBlack';
import KnightBlack from './pieces/KnightBlack';
import KingBlack from './pieces/KingBlack';
import PawnBlack from './pieces/PawnBlack';
import BishopBlack from './pieces/BishopBlack';

import RookWhite from './pieces/RookWhite';
import QueenWhite from './pieces/QueenWhite';
import KnightWhite from './pieces/KnightWhite';
import KingWhite from './pieces/KingWhite';
import PawnWhite from './pieces/PawnWhite';
import BishopWhite from './pieces/BishopWhite';



export default (pieceName) => {
  debugger
  switch (pieceName) {
    case 'rook_black':
      return RookBlack;
    case 'queen_black':
      return QueenBlack;
    case 'king_black':
      return KingBlack;
    case 'pawn_black':
      return PawnBlack;
    case 'bishop_black':
      return BishopBlack;
    case 'knight_black':
      return KnightBlack;
    case 'rook_white':
      return RookWhite;
    case 'queen_white':
      return QueenWhite;
    case 'king_white':
      return KingWhite;
    case 'pawn_white':
      return PawnWhite;
    case 'bishop_white':
      return BishopWhite;
    case 'knight_white':
      return KnightWhite;
    default:
      return null;
  }
}
