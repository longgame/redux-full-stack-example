import React, { Component, PropTypes } from 'react';

module.exports = React.createClass({
  render: function() {
    return (
      <div className='field'>
        { this.props.children }
      </div>
    );
  }
});
