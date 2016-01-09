import _ from 'underscore';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { TodoFilters } from '../actions/TodoList';

import template from './App.rt';

class App extends Component {
  render() {
    return template.apply(this);
  }
  dispatch(action) { this.props.dispatch(action) }
};

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
