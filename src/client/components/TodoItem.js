import React, { Component, PropTypes } from 'react';

import styles from './TodoItem.scss';

module.exports = React.createClass({
  propTypes: {
    todos: PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      completed: PropTypes.bool,
    }).isRequired,
    onClick: PropTypes.func,
  },
  render: function() {
    const item = this.props.todo;
    return (
      <div
        id='todo-item'
        onClick={ this.props.onClick }
        style={{
          textDecoration: item.completed ? 'line-through' : 'none',
          cursor: item.completed ? 'default' : 'pointer',
        }}
      >
        { item.text }
      </div>
    );
  }
});
