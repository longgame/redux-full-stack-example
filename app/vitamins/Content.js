import React, { Component, PropTypes } from 'react';

module.exports = React.createClass({
  render: function() {
    return (
      <div className='content'>
        { this.props.children }
      </div>
    );
  }
});
