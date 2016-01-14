import _ from 'underscore';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import template from './App.rt';

var App = React.createClass({
  render: function() {
    return template.apply(this);
  }
});

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(App);
