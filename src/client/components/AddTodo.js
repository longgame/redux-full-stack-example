import React, { Component, PropTypes } from 'react';

import styles from './AddTodo.scss';

module.exports = React.createClass({
  propTypes: {
    onSubmit: PropTypes.func.isRequired,
  },
  render: function() {
    return (
      <div id='add-todo' className='ui input'>
        <input
          ref='input'
          type='text'
          placeholder='Add todo'
          onKeyPress={ (event) => {
            if (event.key === 'Enter') {
              const node = this.refs.input;
              const text = node.value.trim();
              if (text !== '') {
                this.props.onSubmit(text);
              }
              node.value = '';
            }
          }}
        />
      </div>
    );
  }
});
