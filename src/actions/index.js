import { createAction } from 'redux-actions';
import {
  MOVE,
  CALCULATE_MOVEMENTS,
  CANCEL_MOVEMENT
} from '../constants/actions';


export const cancelMovement = createAction(CANCEL_MOVEMENT);

export const calculateMovements = createAction(CALCULATE_MOVEMENTS);

export const move = createAction(MOVE);
