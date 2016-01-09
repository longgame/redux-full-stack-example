import React, { Component, PropTypes } from 'react';

module.exports = React.createClass({
  propTypes: {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
  },
  render: function() {
    return (
      <div id='counter'>
        <button
          onClick={ this.props.decrement }
        >
          -
        </button>
        { this.props.count }
        <button
          onClick={ this.props.increment }
        >
          +
        </button>
      </div>
    );
  }
});
