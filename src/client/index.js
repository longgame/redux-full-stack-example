import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import reducer from './reducers/index';

const store = createStore(reducer);

const template = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(template, document.getElementById('content'))
