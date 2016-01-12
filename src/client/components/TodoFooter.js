import React, { Component, PropTypes } from 'react';
import classes from 'classnames';

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
    return (
      <div
        className={ classes('ui label', {
          blue: filter === this.props.filter,
        }) }
        onClick={ (e) => {
          e.preventDefault()
          this.props.onChangeFilter(filter);
        }
      }>
        { name }
      </div>
    );
  },
  render: function() {
    return (
      <div
        id='todo-footer'
        className='ui center aligned container'
      >
        { this.renderFilter('SHOW_ALL', 'All') }
        { this.renderFilter('SHOW_ACTIVE', 'Active') }
        { this.renderFilter('SHOW_COMPLETED', 'Completed') }
      </div>
    );
  }
});
