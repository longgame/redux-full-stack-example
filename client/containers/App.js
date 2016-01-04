import _ from 'underscore';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Actions get dispatched through props passed to components
import * as CounterActions from '../actions/Counter';
import * as TodoActions from '../actions/TodoList';

// Components used in this container
import Hello from '../components/Hello';
import Counter from '../components/Counter';
import TodoList from '../components/TodoList';

class App extends Component {
  render() {
    const dispatch = this.props.dispatch;
    return (
      <div id='app'>
        <Hello />
        <Counter
          increment={ () => dispatch(CounterActions.increment()) }
          decrement={ () => dispatch(CounterActions.decrement()) }
          count={ this.props.count }
        />
        <br />
        <TodoList
          todos={ this.props.visibleTodos }
          filter={ this.props.todoFilter }
          onAddTodo={ (text) => dispatch(TodoActions.addTodo(text)) }
          onClickTodo={ (index) => dispatch(TodoActions.toggleTodo(index)) }
          onChangeFilter={ (filter) => {
            dispatch(TodoActions.setVisibilityFilter(filter));
          }}
        />
      </div>
    );
  }
};

function selectTodos(todos, filter) {
  switch (filter) {
    case TodoActions.TodoFilters.SHOW_ALL:
      return todos;
    case TodoActions.TodoFilters.SHOW_COMPLETED:
      return todos.filter( (todo) => todo.completed );
    case TodoActions.TodoFilters.SHOW_ACTIVE:
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
