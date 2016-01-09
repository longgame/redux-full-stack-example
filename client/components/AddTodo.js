import React, { Component, PropTypes } from 'react';

module.exports = React.createClass({
  propTypes: {
    onSubmit: PropTypes.func.isRequired,
  },
  handleClick: function(event) {
    const node = this.refs.input;
    const text = node.value.trim();
    if (text !== '') {
      this.props.onSubmit(text);
    }
    node.value = '';
  },
  render: function() {
    return (
      <div id='add-todo'>
        <input type='text' ref='input' />
        <button onClick={ (e) => this.handleClick(e) }>
          Add
        </button>
      </div>
    );
  }
});
