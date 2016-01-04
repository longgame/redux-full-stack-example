import _ from 'underscore';
import React, { Component, PropTypes } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import Footer from './TodoFooter';

export default class TodoList extends Component {
  render() {
    return (
      <div id='todo-list'>
        <AddTodo
          onSubmit={ (text) => this.props.onAddTodo(text) }
        />
        <ul>
          {
            _.map(this.props.todos, (item, index) => {
              return (
                <Todo {...item}
                  key={ index }
                  onClick={ () => this.props.onClickTodo(index) }
                />
              );
            })
          }
        </ul>
        <Footer
          filter={ this.props.filter }
          onChangeFilter={ this.props.onChangeFilter }
        />
      </div>
    );
  }
};

TodoList.propTypes = {
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
  onClickTodo: PropTypes.func.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
