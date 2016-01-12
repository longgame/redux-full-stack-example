import _ from 'underscore';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as TodoActions from '../actions/TodoList';
const TodoFilters = TodoActions.TodoFilters;

import template from './App.rt';

var App = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired,
  },
  getInitialState: function() {
    this.props.dispatch(TodoActions.addTodo('Build a sick webapp!'));
    return {};
  },
  render: function() {
    return template.apply(this);
  }
});

function selectTodos(todos, filter) {
  switch (filter) {
    case TodoFilters.SHOW_ALL:
      return todos;
    case TodoFilters.SHOW_COMPLETED:
      return todos.filter( (todo) => todo.completed );
    case TodoFilters.SHOW_ACTIVE:
      return todos.filter( (todo) => !todo.completed );
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter,
    visibleTodos: selectTodos(state.todos, state.todoFilter),
    todoFilter: state.todoFilter,
  };
}

export default connect(mapStateToProps)(App);
