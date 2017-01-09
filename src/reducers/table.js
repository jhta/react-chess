import defaultTable from '../utils/getDefaultTable';

function table(state = defaultTable, { type, payload }) {
  switch (type) {
    case 'CALCULATE_MOVEMENTS':
      debugger
      const { positionX, positionY } = payload;
      if (!positionX || !positionY) return state;
      const newState = state;
      newState[positionX + 1][positionY + 1].avalible = true;
      newState[positionX - 1][positionY + 1].avalible = true;
      return newState;
    default:
      return state;
  }
}


export default table;
