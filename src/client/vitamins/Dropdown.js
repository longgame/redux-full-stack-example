import React, { Component, PropTypes } from 'react';
import classes from 'classnames';

module.exports = React.createClass({
  componentDidMount: function() {
    $('.ui.dropdown').dropdown();
  },
  render: function() {
    const { isActive, ...props } = this.props;
    return (
      <div
        className='ui dropdown'
        { ...props }
        >
        { this.props.children }
      </div>
    );
  }
});
