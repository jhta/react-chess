import  {
  PIECES_BLACK,
  PIECES_WHITE,
} from '../constants/pieces';

/**
 * return color square
 * @param  {Number} i row number
 * @param  {Number} j column number
 * @return {String}   color black or white
 */
const getColor = (i, j) => ((i + j) % 2 === 0) ?
 'white' : 'black';


const fillSquare = (i, j, pieceName, square) => Object
  .assign(
    {},
    square,
    {
      piece: pieceName,
      color: getColor(i, j),
    }
);


/**
 * fill default row square with color and figure name
 * @param  {Array} row       Row
 * @param  {Number} i Row number
 * @return {Array}           Row fill
 */
export default (row = [], i = -1) => {

  if (i > 7 || i < 0) {
    return null;
  }

  switch (i) {
    case 0:
      return row
        .map((square, j) => fillSquare(i, j, PIECES_BLACK[j], square));

    case 7:
      return row
        .map((square, j) => fillSquare(i, j, PIECES_WHITE[j], square));

    case 1:
      return row
        .map((square, j) => fillSquare(i, j, 'pawn_black', square));

    case 6:
      return row
        .map((square, j) => fillSquare(i, j, 'pawn_white', square));
    default:
      return row
        .map((square, j) => fillSquare(i, j, null, square));
  }
};
