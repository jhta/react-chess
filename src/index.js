import './index.styl';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createStore } from 'redux';
import tableReducer from './reducers/table';

console.log(tableReducer);

let tableStore = createStore(tableReducer);

console.log("table state", tableStore.getState());

const render = () => {
  debugger
  ReactDOM.render(
    <App
      table={tableStore.getState()}
      dispatch={tableStore.dispatch}
       />,
    document.getElementById('root')
  );

}

tableStore.subscribe(render);
render();
