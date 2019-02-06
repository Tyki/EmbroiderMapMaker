import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import { Provider } from 'mobx-react'
import { store } from './store/index'

ReactDOM.render(
  <Provider Store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
