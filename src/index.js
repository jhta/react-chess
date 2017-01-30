import './index.styl';
import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import { createStore } from 'redux';
import tableReducer from './reducers/table';
import { Provider } from 'react-redux';

let tableStore = createStore(tableReducer);

render(
  <Provider store={tableStore}>
    <App />
   </Provider>,
  document.getElementById('root')
);
