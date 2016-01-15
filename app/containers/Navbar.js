import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import template from './Navbar.rt';

var Navbar = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired,
  },
  render: function() {
    return template.apply(this);
  }
});

function mapStateToProps(state) {
  return {
    session: state.session,
  };
}

export default connect(mapStateToProps)(Navbar);
