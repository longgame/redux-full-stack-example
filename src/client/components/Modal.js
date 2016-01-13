import React, { Component, PropTypes } from 'react';
import classes from 'classnames';

module.exports = React.createClass({
  propTypes: function() {
    isActive: PropTypes.bool.isRequired
  },
  render: function() {
    const { isActive, ...props } = this.props;
    return (
      <div> { /* Shield modals from class manipulation */ }
        <div
          className={ classes('ui modal', {
              active: this.props.isActive,
            })
          }
          { ...props }
        >
          { this.props.children }
        </div>
      </div>
    );
  }
});
