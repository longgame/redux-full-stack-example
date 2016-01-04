import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component {
  render() {
    return (
      <div id='add-todo'>
        <input type='text' ref='input' />
        <button onClick={ (e) => this.handleClick(e) }>
          Add
        </button>
      </div>
    );
  }
  
  handleClick(event) {
    const node = this.refs.input;
    const text = node.value.trim();
    if (text !== '') {
      this.props.onSubmit(text);
    }
    node.value = '';
  }
};

AddTodo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
