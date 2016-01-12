import React, { Component, PropTypes } from 'react';

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
        <div className='ui circular orange button'
          onClick={ this.props.decrement }
        >
          -
        </div>
        <div className='ui label'>
          { this.props.count }
        </div>
        <div className='ui circular olive button'
          onClick={ this.props.increment }
        >
          +
        </div>
      </div>
    );
  }
});
