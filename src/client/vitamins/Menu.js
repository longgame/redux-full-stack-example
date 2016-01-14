import React, { Component, PropTypes } from 'react';

module.exports = React.createClass({
  render: function() {
    const { ...props } = this.props;
    return (
      <div
        className='ui menu'
        { ...props }
      >
        { this.props.children }
      </div>
    );
  }
});
