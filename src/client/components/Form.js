import _ from 'underscore';
import React, { Component, PropTypes } from 'react';

module.exports = React.createClass({
  propTypes: {
    onSubmit: PropTypes.func,
  },
  submitForm: function() {
    if (this.props.onSubmit)
      this.props.onSubmit(
        _.mapObject(this.refs, (ref) => ref.value)
      );
  },
  componentDidMount: function() {
    $('.ui.form')
    .form({
        onSuccess: this.submitForm,
      });
  },
  render: function() {
    return (
      <div className='ui form' >
        { this.props.children }
      </div>
    );
  }
});
