import './index.styl';
import React from 'react';
import { render } from 'react-dom';
import Root from './Root.jsx';
import configStore from './configStore';

render(
  <Root store={configStore()} />,
  document.getElementById('root')
);
