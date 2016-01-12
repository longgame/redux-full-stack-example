import React, { Component, PropTypes } from 'react';
import classes from 'classnames';

module.exports = React.createClass({
  propTypes: function() {
    isActive: PropTypes.bool.isRequired
  },
  render: function() {
    return (
      <div
        id='modal'
        className={ classes('ui modal', {
          active: this.props.isActive,
        }) }
      >
        { this.props.children }
      </div>
    );
  }
});
