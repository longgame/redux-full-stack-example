import _ from 'underscore';
import React, { Component, PropTypes } from 'react';

module.exports = React.createClass({
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
    const { ...props } = this.props;
    return (
      <div
        className='ui form'
        { ...props }
      >
        { this.props.children }
      </div>
    );
  }
});
