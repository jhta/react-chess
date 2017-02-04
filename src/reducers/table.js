import defaultTable from '../utils/getDefaultTable';
import getMovement from '../utils/getMovement';
import { fromJS, Map as map } from 'immutable';
import { handleActions } from 'redux-actions'

const cleanOptions = (table) => table
.map(row => row
  .map(square => square
    .set('avalible', false)
  )
);

const move = ({ positionX, positionY}, state) => {

  let table = state.get('table').toJS();
  table[state.get('pieceInMoveX')][state.get('pieceInMoveY')].piece = null;
  table[positionX][positionY].piece = state.get('pieceInMove');

  return state.merge(
    map({
      table: cleanOptions(fromJS(table)),
      isMoving: false,
      turn: state.get('turn') === "white" ?
        "black"
        :
        "white"
    })
  );
}

const defaultState = map({
  table: fromJS(defaultTable),
  turn: 'white',
  isMoving: false,
  pieceInMove: false,
  pieceInMoveX: false,
  pieceInMoveY: false,
});

const calculateMovements = (payload,  state) => {
  const isMoving = !state.get('isMoving');
  const oldTurn = state.get('turn');
  let turn = oldTurn;
  if (!isMoving) {
    turn = turn === "white" ? "black" : "white";
  }
  return state.merge(
    map({
      table: getMovement(payload, state.get('table')),
      isMoving,
      turn,
      pieceInMove: payload.piece,
      pieceInMoveX: payload.positionX,
      pieceInMoveY: payload.positionY
    })
  );
};

const cancelMovement = (state) => {
  return state.merge(map({
    table: cleanOptions(state.get('table')),
    isMoving: false,
  }));
};


const reducer = handleActions({

  'CALCULATE_MOVEMENTS':
    (state, { payload }) => calculateMovements(
      payload,
      state
    ),

  'CANCEL_MOVEMENT':
    (state) => cancelMovement(state),

  'MOVE':
    (state, { payload }) => move(payload, state)

  },
  defaultState
);



export default reducer;
