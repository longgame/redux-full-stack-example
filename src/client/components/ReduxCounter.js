import React, { Component, PropTypes } from 'react';

import Button from './Button';

import styles from './ReduxCounter.scss';

module.exports = React.createClass({
  propTypes: {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
  },
  render: function() {
    return (
      <div id='redux-counter' className='ui center aligned container'>
        <Button
          className='ui circular orange button'
          onClick={ this.props.decrement }
        >
          -
        </Button>
        <div className='ui label'>
          { this.props.count }
        </div>
        <Button className='ui circular olive button'
          onClick={ this.props.increment }
        >
          +
        </Button>
      </div>
    );
  }
});
