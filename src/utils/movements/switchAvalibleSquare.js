/**
 * Validate if the square has a piece or is empty
 * @param  {Object}  square
 * @return {Boolean}
 */
function hasPiece(square) {
  if (!square.has('piece')) return false;
  return !(square.get('piece') === null);
  }

/**
 * Validate if square has a different color
 * @param  {String}  color
 * @param  {Object}  square
 * @return {Boolean}
 */
function hasDifferentColor(color, square) {
  return square.get('piece').get('color') !== color;
}

/**
 * Set as avalible the square
 * @param  {Number} i
 * @param  {Number} j
 * @param  {List} table
 * @param  {Object} square
 * @return {List}        Immutable List table
 */
function getArrangedTable(i, j, table, square) {
  return table
    .set(
      i,
      table.get(i)
        .set(
          j,
          square
            .set('avalible', true)
        )
    )
}

/**
 * Switch the
 * @param  {[type]} i        [description]
 * @param  {[type]} j        [description]
 * @param  {[type]} table    [description]
 * @param  {[type]} square   [description]
 * @param  {[type]} justKill [description]
 * @param  {[type]} piece    [description]
 * @return {[type]}          [description]
 */
function switchAvalibleSquare(i, j, table, square, justKill, piece) {
  if (!hasPiece(square)) {
    if (justKill) return table;
    return getArrangedTable(i, j, table, square);
  }

  if (justKill) {
    if (hasDifferentColor(piece.get('color'), square)) {
      return getArrangedTable(i, j, table, square);
    }
    return table;
  }

  if (hasDifferentColor(piece.get('color'), square)) {
    return getArrangedTable(i, j, table, square);
  }

  return table;
}


export default switchAvalibleSquare;
