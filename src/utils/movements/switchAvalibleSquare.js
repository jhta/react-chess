function hasPiece(square) {
  if (!square.has('piece')) return false;
  return !(square.get('piece') === null);
  }

function hasDifferentColor(color, square) {
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

function switchAvalibleSquare(i, j, table, square, justKill, piece) {
  if (!hasPiece(square)) {
    if (justKill) return table;
    debugger
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
