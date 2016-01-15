import React, { Component, PropTypes } from 'react';

import template from './UserWidget.rt';

module.exports = React.createClass({
  propTypes: {
    logoutAction: PropTypes.func.isRequired,
  },
  getInitialState: function() {
    return {
      isOpen: false,
      frame: null,
    };
  },
  openWidget: function(frame) {
    this.setState({ frame, isOpen: true });
  },
  closeWidget: function() {
    this.setState({ isOpen: false });
  },
  render: function() {
    return template.apply(this);
  }
});
