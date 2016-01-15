import React, { Component, PropTypes } from 'react';

module.exports = React.createClass({
  propTypes: {
    country: PropTypes.string,
  },
  render: function() {
    const { country, ...props } = this.props;
    return (
      <i className={ country.toLowerCase()+' flag' } { ...props }></i>
    );
  }
});
