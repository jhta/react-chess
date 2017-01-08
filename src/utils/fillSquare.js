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

/**
 * fill default row square with color and figure name
 * @param  {Array} row       Row
 * @param  {Number} rowNumber Row number
 * @return {Array}           Row fill
 */
export default (row = [], rowNumber = -1) => {

  if (rowNumber > 7 || rowNumber < 0) {
    return null;
  }

  switch (rowNumber) {
    case 0:
      return row.map((square, columnNumber) => ({
        figure: PIECES_BLACK[columnNumber],
        color: getColor(rowNumber, columnNumber)
      }));

    case 7:
      return row.map((square, columnNumber) => ({
        figure: PIECES_WHITE[columnNumber],
        color: getColor(rowNumber, columnNumber)
      }));

    case 1:
      return row.map((square, columnNumber) => ({
        figure: 'knight_black',
        color: getColor(rowNumber, columnNumber)
      }));

    case 6:
      return row.map((square, columnNumber) => ({
        figure: 'knight_white',
        color: getColor(rowNumber, columnNumber)
      }));
    default:
    return row.map((square, columnNumber) => ({
      color: getColor(rowNumber, columnNumber)
    }));
  }
};
