import React, { Component, PropTypes } from 'react';

module.exports = React.createClass({
  propTypes: {
    onClick: PropTypes.func,
  },
  render: function() {
    return (
      <div
        className='ui clear button'
        onClick={ this.props.onClick }
      >
        { this.props.children || 'Clear' }
      </div>
    );
  }
});
