import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { DimmerItems } from '../actions/Dimmer';

import template from './Dimmer.rt';

var Dimmer = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired,
    isVisible: PropTypes.bool,
  },
  render: function() {
    return template.apply(this);
  }
});

function mapStateToProps(state) {
  return {
    isVisible: state.dimmer.isVisible,
  };
}

export default connect(mapStateToProps)(Dimmer);
