import React, { Component, PropTypes } from 'react';

import Button from './Button';

module.exports = React.createClass({
  propTypes: {
    onClick: PropTypes.func,
  },
  render: function() {
    const { ...props } = this.props;
    return (
      <Button
        className='ui submit button'
        { ...props }
        >
        { this.props.children || 'Submit' }
      </Button>
    );
  }
});
