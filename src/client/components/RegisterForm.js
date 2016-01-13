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
    return (
      <div id='register-form'>
        <Form>
          <Field>
            <label>Email:</label>
            <input name='email' type='text' />
          </Field>
          <Field>
            <label>Password:</label>
            <input name='password' type='password' />
          </Field>
          <Field>
            <label>Confirm Password:</label>
            <input name='password2' type='password' />
          </Field>
          <Field>
            <div className='ui checkbox'>
              <input name='agreement' type='checkbox' />
              <label>I have read and agree to the Terms of Service and Privacy Policy.</label>
            </div>
          </Field>
          <Submit>Register</Submit>
          <Clear />
        </Form>
      </div>
    );
  }
});
