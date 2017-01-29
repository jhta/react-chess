import './index.styl';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createStore } from 'redux';
import tableReducer from './reducers/table';
import { Provider } from 'react-redux';

let tableStore = createStore(tableReducer);

const render = () => {
  ReactDOM.render(
    <Provider store={tableStore}>
      <App />
     </Provider>,
    document.getElementById('root')
  );
}

tableStore.subscribe(render);
render();
