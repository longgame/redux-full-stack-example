import React, { Component, PropTypes } from 'react';

import Button from './Button';

module.exports = React.createClass({
  propTypes: {
    onClick: PropTypes.func
  },
  getInitialState: function() {
    return {
      count: 0
    };
  },
  increment: function() {
    this.setState({ count: this.state.count+1 });
    this.props.onClick && this.props.onClick(this.state.count);
  },
  render: function() {
    const { onClick, ...props } = this.props;
    return (
      <Button
        onClick={ this.increment }
        { ...props }
      >
        { this.state.count }
      </Button>
    );
  }
});
