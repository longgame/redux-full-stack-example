import React, { Component, PropTypes } from 'react';

module.exports = React.createClass({
  render: function() {
    const { ...props } = this.props;
    return (
      <div
        className='field'
        { ...props }
        >
        { this.props.children }
      </div>
    );
  }
});
