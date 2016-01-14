import React, { Component, PropTypes } from 'react';

import Button from '../vitamins/Button';

module.exports = React.createClass({
  propTypes: {
    logoutAction: PropTypes.func.isRequired,
  },
  render: function() {
    const { loginAction, logoutAction, ...props } = this.props;
    return (
      <Button
        onClick={ logoutAction }
      >
        Logout
      </Button>
    );
  }
});
