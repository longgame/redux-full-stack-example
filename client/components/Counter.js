import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  render() {
    return (
      <div id='counter'>
        <button
          onClick={ this.props.decrement }
        >
          -
        </button>
        { this.props.count }
        <button
          onClick={ this.props.increment }
        >
          +
        </button>
      </div>
    );
  }
};

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};
