import React, { Component, PropTypes } from 'react';

import template from './LoginForm.rt';

module.exports = React.createClass({
  propTypes: {
    onSubmit: PropTypes.func.isRequired,
  },
  submitForm: function() {
    const email = $('#login-form').form('get field', 'email').val();
    const password = $('#login-form').form('get field', 'password').val();
    this.props.onSubmit({ email, password });
  },
  componentDidMount: function() {
    $('#login-form')
      .form({
        fields: {
          email: ['empty', 'email'],
          password: ['empty'],
        },
        inline: true,
      })
      .submit(this.submitForm);
  },
  render: function() {
    return template.apply(this);
  }
});
