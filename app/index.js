import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

const logger = reduxLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunk, promise, logger
)(createStore);

import reducer from './reducers/index';

import Header from './containers/Navbar';
import Body from './containers/App';
import Footer from './containers/Footer';

const store = createStoreWithMiddleware(reducer);

const Content = React.createClass({
  render: function() {
    return (
      <div id='react-content' className='ui container'>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
});

const template = (
  <Provider store={store}>
    <Content />
  </Provider>
);

ReactDOM.render(template, document.getElementById('content'))
