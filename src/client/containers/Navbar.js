import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import template from './Navbar.rt';

var Navbar = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired,
    dimmerVisible: PropTypes.bool.isRequired,
  },
  render: function() {
    return template.apply(this);
  }
});

function mapStateToProps(state) {
  return {
    dimmerVisible: state.dimmer.isVisible
  };
}

export default connect(mapStateToProps)(Navbar);
