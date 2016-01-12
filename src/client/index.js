import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';

import Header from './containers/Navbar';
import Body from './containers/App';
import Footer from './containers/Footer';
import Dimmer from './containers/Dimmer';

const store = createStore(reducer);

const Content = React.createClass({
  render: function() {
    return (
      <div id='react-content' className='ui container'>
        <Header />
        <Body />
        <Footer />
        <Dimmer />
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
