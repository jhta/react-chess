import defaultTable from '../utils/getDefaultTable';
import getMovement from '../utils/getMovement';
import { fromJS, Map as map } from 'immutable';
import { handleActions } from 'redux-actions'


/**
 * Defaul state map
 */
const defaultState = map({
  table: fromJS(defaultTable),
  turn: 'white',
  isMoving: false,
  pieceInMove: false,
  pieceInMoveX: false,
  pieceInMoveY: false,
});


/**
 * Clean the posible movements options in the table,
 * changing the avalible props for every square
 * @param  {Object} table
 * @return {Object} new table
 */
const cleanOptions = (table) => table
.map(row => row
  .map(square => square
    .set('avalible', false)
  )
);

/**
 * get a new state moving the piece in the table and
 * changing the turn
 * @param  {Number} positionX row
 * @param  {Number} positionY column
 * @param  {Object} state
 * @return {Object}
 */
const move = ({ positionX, positionY }, state) => {

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

/**
 * calculate the posible movement for the piece
 * @param  {Object} payload
 * @param  {Object} state
 * @return {Object}         new state
 */
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

/**
 * Clean the avalible options and cancel the movement
 * @param  {Object} state actual state
 * @return {object}       New state
 */
const cancelMovement = (state) => state
  .merge(
    map({
      table: cleanOptions(state.get('table')),
      isMoving: false,
    })
  );


/**
 * Handle actions, return reducer map
 * @return {Object}   Reducer
 */
const reducer = handleActions({

  CALCULATE_MOVEMENTS:
    (state, { payload }) => calculateMovements(
      payload,
      state
    ),

  CANCEL_MOVEMENT:
    (state) => cancelMovement(state),

  MOVE:
    (state, { payload }) => move(payload, state)

  },
  defaultState
);


export default reducer;
