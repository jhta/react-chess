import fillSquare from './fillSquare';
import { DEFAULT_PIECE } from '../constants/pieces';

/**
 * Default array 8*8 filled
 * @param {Array}
 */
const table = new Array(8)
  .fill(
    new Array(8)
      .fill(DEFAULT_PIECE)
  )
  .map(fillSquare)


export default table;
