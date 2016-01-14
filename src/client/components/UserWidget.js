import React, { Component, PropTypes } from 'react';

import Button from './Button';
import LoginWidget from './LoginWidget';

module.exports = React.createClass({
  propTypes: {
    isAuthenticated: PropTypes.bool.isRequired,
  },
  render: function() {
    const { loginAction, logoutAction, ...props } = this.props;
    if (this.props.isAuthenticated === false) {
      return (
        <LoginWidget
          loginAction={ loginAction }
          { ...props }
        />
      );
    } else {
      return (
        <Button
          onClick={ logoutAction }
        >
          Logout
        </Button>
      );
    }
  }
});
