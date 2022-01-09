import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import { AppProvider } from './Projects/context';
import Start from './Projects/Color-App';

ReactDOM.render(
  <AppProvider>
    <Start />
  </AppProvider>,
  document.getElementById('root')
);
