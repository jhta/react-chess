import defaultTable from '../utils/getDefaultTable';
import getMovement from '../utils/getMovement';
import { fromJS } from 'immutable';

function table(state = fromJS(defaultTable), { type, payload }) {
  switch (type) {
    case 'CALCULATE_MOVEMENTS':
      return getMovement(payload, state);
    case 'CANCEL_MOVEMENT':

      return state
        .map(row => row
          .map(square => square
            .set('avalible', false)
          )
        )

    default:
      return state;
  }
}


export default table;
