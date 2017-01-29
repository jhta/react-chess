export const cancelMovement = () => {
  return {
    type: 'CANCEL_MOVEMENT'
  }
};

export const calculateMovements = (row, column, piece) => {
  return {
    type: 'CALCULATE_MOVEMENTS',
    payload: {
      positionX: row,
      positionY: column,
        piece: piece
      }
    }
};
