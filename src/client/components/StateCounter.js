import React, { Component, PropTypes } from 'react';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
    };
  },
  increment: function() {
    this.setState({ count: this.state.count+1 });
  },
  render: function() {
    return (
      <div id='state-counter'>
        <div className='ui circular teal button'
          onClick={ this.increment }
        >
          { this.state.count }
        </div>
      </div>
    );
  }
});
