import React, { Component, PropTypes } from 'react';

import template from './GuestWidget.rt';

module.exports = React.createClass({
  propTypes: {
    loginAction: PropTypes.func.isRequired,
    registerAction: PropTypes.func.isRequired,
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
    $('#guest-widget').form('clear');
    this.setState({ isOpen: false });
  },
  render: function() {
    return template.apply(this);
  }
});
