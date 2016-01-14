import React, { Component, PropTypes } from 'react';

import Button from './Button';

module.exports = React.createClass({
  render: function() {
    const { ...props } = this.props;
    return (
      <Button
        className='ui clear button'
        { ...props }
      >
        { this.props.children || 'Clear' }
      </Button>
    );
  }
});
