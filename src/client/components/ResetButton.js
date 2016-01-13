import React, { Component, PropTypes } from 'react';

import Button from './Button';

module.exports = React.createClass({
  propTypes: {
    onClick: PropTypes.func,
  },
  render: function() {
    const { children ...props } = this.props;
    return (
      <Button
        className='ui reset button'
        { ...props }
      >
        { children || 'Reset' }
      </div>
    );
  }
});
