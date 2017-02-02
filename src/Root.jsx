import React from 'react';
import App from './containers/App.jsx';
import { Provider } from 'react-redux';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
};

export default Root;
