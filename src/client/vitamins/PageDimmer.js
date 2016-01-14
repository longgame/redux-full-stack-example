import React, { Component, PropTypes } from 'react';
import classes from 'classnames';

module.exports = React.createClass({
  propTypes: {
    isActive: PropTypes.bool.isRequired,
  },
  render: function() {
    const { isActive, ...props } = this.props;
    return (
      <div
        className={ classes('ui page dimmer', {
            active: isActive,
          })
        }
        { ...props }
      >
        { this.props.children }
      </div>
    );
  }
});
