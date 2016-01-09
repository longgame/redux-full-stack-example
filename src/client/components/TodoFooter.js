import React, { Component, PropTypes } from 'react';

module.exports = React.createClass({
  propTypes: {
    onChangeFilter: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
      'SHOW_ALL',
      'SHOW_COMPLETED',
      'SHOW_ACTIVE',
    ]).isRequired,
  },
  renderFilter: function(filter, name) {
    if (filter === this.props.filter) {
      return name;
    } else {
      return (
        <a href='#' onClick={ (e) => {
          e.preventDefault()
          this.props.onChangeFilter(filter);
        }}>
          { name }
        </a>
      );
    }
  },
  render: function() {
    return (
      <p>
        Show:
        { ' ' }
        { this.renderFilter('SHOW_ALL', 'All') }
        { ', ' }
        { this.renderFilter('SHOW_COMPLETED', 'Completed') }
        { ', ' }
        { this.renderFilter('SHOW_ACTIVE', 'Active') }
        { ', ' }
      </p>
    );
  }
});
