import _ from 'underscore';
import React, { Component, PropTypes } from 'react';

import Form from './Form';
import Field from './FormField';
import Submit from './SubmitButton';
import Clear from './ClearButton';

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
    return (
      <div id='login-form'>
        <Form>
          <Field>
            <label>Email:</label>
            <input name='email' type='text' />
          </Field>
          <Field>
            <label>Password:</label>
            <input name='password' type='password' />
          </Field>
          <Submit>Login</Submit>
          <Clear />
        </Form>
      </div>
    );
  }
});
