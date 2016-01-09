import React, { Component, PropTypes } from 'react';

module.exports = React.createClass({
  propTypes: {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  },
  render: function() {
    return (
      <li
        onClick={ this.props.onClick }
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer',
        }}
      >
        { this.props.text }
      </li>
    );
  }
});
