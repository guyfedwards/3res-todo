import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../stores/todos';

import App from './App';

import TodoSocketListeners from '../socket-listeners/todos';
TodoSocketListeners(store);

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
