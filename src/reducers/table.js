import defaultTable from '../utils/getDefaultTable';
import getMovement from '../utils/getMovement';
import { fromJS, Map as mapImmutable } from 'immutable';

const cleanOptions = (table) => table
.map(row => row
  .map(square => square
    .set('avalible', false)
  )
);

const defaultState = mapImmutable({
  table: fromJS(defaultTable),
  turn: 'white',
  isMoving: false,
});


function table(state = fromJS(defaultState), { type, payload }) {
  switch (type) {

    case 'CALCULATE_MOVEMENTS':
      return getMovement(payload, state.get('table'));

    case 'CANCEL_MOVEMENT':
      return cleanOptions(state.get('table'));

    case 'MOVE':
      const {
        positionX,
        positionY,
      } = payload;
      return state;

    default:
      return state;
  }
}


export default table;
