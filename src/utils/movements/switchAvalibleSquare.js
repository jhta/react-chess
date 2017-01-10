function hasPiece(square) {
  if (!square.has('piece')) return false;
  return !(square.get('piece') === null);
  }

function hasDifferentColor(color, square) {
  debugger
  return square.get('piece').get('color') !== color;
}

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

function switchAvalibleSquare(i, j, table, square, canKill, piece) {
  if (!hasPiece(square)) {
    if (canKill) return table;
    return getArrangedTable(i, j, table, square);
  }

  if (canKill) {
    if (hasDifferentColor(piece.get('color'), square)) {
      return getArrangedTable(i, j, table, square);
    }
    return table;
  }
  return table;
}


export default switchAvalibleSquare;
