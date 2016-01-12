import React, { Component, PropTypes } from 'react';

module.exports = React.createClass({
  propTypes: {
    onClick: PropTypes.func.isRequired,
  },
  render: function() {
    return (
      <div
        className='ui button'
        onClick={ this.props.onClick }
      >
        { this.props.children }
      </div>
    );
  }
});
