import fillRow from './fillRow';
import { DEFAULT_SQUARE } from '../constants/pieces';

/**
 * Default array 8*8 filled
 * @param {Array}
 */
const defaultTable = new Array(8)
  .fill(
    new Array(8)
      .fill(DEFAULT_SQUARE)
  )
  .map(fillRow)

export default defaultTable;
