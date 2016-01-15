import React, { Component, PropTypes } from 'react';

import template from './RegisterForm.rt';

module.exports = React.createClass({
  propTypes: {
    onSubmit: PropTypes.func.isRequired,
  },
  submitForm: function() {
    const email = $('#register-form').form('get field', 'email').val();
    const password = $('#register-form').form('get field', 'password').val();
    this.props.onSubmit({ email, password });
  },
  componentDidMount: function() {
    $('#register-form')
      .form({
        fields: {
          email: ['empty', 'email'],
          password: ['empty', 'minLength[6]', 'maxLength[45]'],
          password2: {
            rules: [
              { type: 'match[password]', prompt: 'Passwords don\'t match' }
            ]
          },
          agreement: {
            rules: [
              { type: 'checked', prompt: 'Please agree to our Terms of Service.' }
            ]
          },
        },
        inline: true,
      })
      .submit(this.submitForm);
  },
  render: function() {
    return template.apply(this);
  }
});
