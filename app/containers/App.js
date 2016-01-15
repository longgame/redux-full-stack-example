import _ from 'underscore';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SessionActions from '../actions/Session';

import template from './App.rt';

var App = React.createClass({
  getInitialState: function() {
    console.log(this.props.dispatch)
    return {};
  },
  render: function() {
    return template.apply(this);
  }
});

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(App);
