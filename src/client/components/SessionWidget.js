import React, { Component, PropTypes } from 'react';

import LoginWidget from './LoginWidget';
import UserDropdown from './UserDropdown';

module.exports = React.createClass({
  propTypes: {
    isAuthenticated: PropTypes.bool.isRequired,
  },
  render: function() {
    const { ...props } = this.props;
    if (this.props.isAuthenticated === false) {
      return <LoginWidget { ...props } />;
    } else {
      return <UserDropdown { ...props } />;
    }
  }
});
