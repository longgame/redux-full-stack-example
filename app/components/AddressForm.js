import React, { Component, PropTypes } from 'react';

import template from 'AddressForm.rt';

module.exports = React.createClass({
  propTypes: {
    onSubmit: PropTypes.func.isRequired,
  },
  submitForm: function() {
    const address1 = $('#address-form').form('get field', 'address1');
    const address2 = $('#address-form').form('get field', 'address2');
    const state = $('#address-form').form('get field', 'state');
    const country = $('#address-form').form('get field', 'country');
    const postal_code = $('#address-form').form('get field', 'postal_code');
    this.props.onSubmit({ address1, address2, state, country, postal_code });
  },
  componentDidMount: function() {
    $('#address-form')
      .form({
        fields: {
          address1: ['empty'],
          address2: ['empty'],
          state: ['empty'],
          country: ['empty'],
          postal_code: ['empty'],
        },
        inline: true,
      })
      .submit(this.submitForm);
  },
  render: function() {
    return template.apply(this);
  }
});
