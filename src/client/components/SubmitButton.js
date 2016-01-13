import React, { Component, PropTypes } from 'react';

import Button from './Button';

module.exports = React.createClass({
  propTypes: {
    onClick: PropTypes.func,
  },
  render: function() {
    return (
      <div
        className='ui submit button'
        onClick={ this.props.onClick }
      >
        { this.props.children || 'Submit' }
      </div>
    );
  }
});
