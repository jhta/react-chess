import { createStore } from 'redux';
import tableReducer from './reducers/table';
import throttle from 'lodash/throttle';
import { fromJS } from 'immutable';

const congifStore = () => {
  const saveState = (state) => {
    localStorage.setItem('state', JSON.stringify(state));
    return true;
  }

  const loadState = () => {
    if (localStorage.getItem('state')) {
      return JSON.parse(localStorage.getItem('state'))
    }
    return null;
  }

  let store = loadState() ?
    createStore(tableReducer, fromJS(loadState()))
    :
    createStore(tableReducer)

  store.subscribe(
    throttle(() => {
      saveState(store.getState())
    }, 1000)
  );

  return store;
}

export default congifStore;
