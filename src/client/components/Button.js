import React, { Component, PropTypes } from 'react';

module.exports = React.createClass({
  propTypes: {
    type: PropTypes.string,
    onClick: PropTypes.func,
  },
  render: function() {
    return (
      <div
        className='ui button'
        onClick={ this.props.onClick }
        type={ this.props.type || 'button' }
      >
        { this.props.children }
      </div>
    );
  }
});
