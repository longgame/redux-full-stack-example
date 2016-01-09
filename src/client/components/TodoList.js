import React, { Component, PropTypes } from 'react';

import template from './TodoList.rt';

module.exports = React.createClass({
  propTypes: {
    todos: PropTypes.arrayOf({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
    filter: PropTypes.oneOf([
      'SHOW_ALL',
      'SHOW_COMPLETED',
      'SHOW_ACTIVE',
    ]).isRequired,
    onAddTodo: PropTypes.func.isRequired,
    onClickTodo: PropTypes.func,
    onChangeFilter: PropTypes.func,
  },
  render: template
});