
function addMove(table, piece, row, column) {
  if (row < 0 || row > 7) return false;
  if (column < 0 || column > 7) return false;

  const auxPiece = table.get(row).get(column).get('piece');
  if (auxPiece) {
    if (auxPiece.color === piece.get('color')) return false;
    return {
      move: {
        moveX: row,
        moveY: column,
      },
      break: true
    };
  }

  return {
    move: {
      moveX: row,
      moveY: column
    },
    break: false,
  };
}

export default addMove;
