import defaultTable from '../utils/getDefaultTable';
import getMovement from '../utils/getMovement';
import { fromJS, Map as mapImmutable } from 'immutable';

const cleanOptions = (table) => table
.map(row => row
  .map(square => square
    .set('avalible', false)
  )
);

const move = (payload, state) => {
  const {
    positionX,
    positionY,
  } = payload;

  let table = state.get('table').toJS();
  table[state.get('pieceInMoveX')][state.get('pieceInMoveY')].piece = null;
  table[positionX][positionY].piece = state.get('pieceInMove');

  return state.merge(
    mapImmutable({
      table: cleanOptions(fromJS(table)),
      isMoving: false,
      turn: state.get('turn') === "white" ?
        "black"
        :
        "white"
    })
  );
}

const defaultState = mapImmutable({
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
    mapImmutable({
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
  return state.merge(mapImmutable({
    table: cleanOptions(state.get('table')),
    isMoving: false,
  }));
};

function table(state = fromJS(defaultState), { type, payload }) {
  switch (type) {

    case 'CALCULATE_MOVEMENTS':
      return calculateMovements(payload, state);

    case 'CANCEL_MOVEMENT':
      return cancelMovement(state);

    case 'MOVE':
      return move(payload, state);

    default:
      return state;
  }
}


export default table;
