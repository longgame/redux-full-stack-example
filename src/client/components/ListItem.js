import React, { Component, PropTypes } from 'react';

module.exports = React.createClass({
  render: function() {
    return (
      <div> { /* shield class */ }
        <div className='item'>
          { this.props.children }
        </div>
      </div>
    );
  }
});
