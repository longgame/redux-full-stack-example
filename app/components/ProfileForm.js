import React, { Component, PropTypes } from 'react';

import template from './ProfileForm.rt';

module.exports = React.createClass({
  propTypes: {
    onSubmit: PropTypes.func.isRequired,
  },
  submitForm: function() {
    const first_name = $('#profile-form').form('get field', 'first_name');
    const last_name = $('#profile-form').form('get field', 'last_name');
    const phone_number = $('#profile-form').form('get field', 'phone_number');
    const occupation = $('#profile-form').form('get field', 'occupation');
    this.props.onSubmit({ first_name, last_name, occupation, phone_number });
  },
  componentDidMount: function() {
    $('#profile-form')
      .form({
        fields: {
          first_name: ['empty'],
          last_name: ['empty'],
          phone_number: ['empty'],
          occupation: ['empty'],
        },
        inline: true,
      })
      .submit(this.submitForm);
  },
  render: function() {
    return template.apply(this);
  }
});
