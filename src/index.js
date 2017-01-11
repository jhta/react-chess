import './index.styl';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createStore } from 'redux';
import tableReducer from './reducers/table';
//import { fromJS } from 'immutable';

console.log(tableReducer);

let tableStore = createStore(tableReducer);

//console.log(fromJS(tableStore.getState()).toJS());

const render = () => {
  ReactDOM.render(
    <App
      table={tableStore.getState().toJS()}
      dispatch={tableStore.dispatch}
       />,
    document.getElementById('root')
  );

}

tableStore.subscribe(render);
render();
