import React, { Component, PropTypes } from 'react';

import Form from '../vitamins/Form';
import Field from '../vitamins/Field';
import Fields from '../vitamins/Fields';
import Submit from '../vitamins/SubmitButton';
import Clear from '../vitamins/ClearButton';

import StateDropdown from './StateDropdown';
import CountryDropdown from './CountryDropdown';

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
    return (
      <div id='address-form'>
        <Form>
          <Field>
            <Fields>
              <Field className='twelve wide field'>
                <label>Address:</label>
                <input name='address1' type='text' />
              </Field>
              <Field className='four wide field'>
                <label>Suite:</label>
                <input name='address2' type='text' />
              </Field>
            </Fields>
          </Field>
          <Field>
            <Fields>
              <Field>
                <label>State:</label>
                <StateDropdown />
              </Field>
              <Field>
                <label>Country:</label>
                <CountryDropdown />
              </Field>
              <Field>
                <label>Postal Code:</label>
                <input name='postal_code' type='text' />
              </Field>
            </Fields>
          </Field>
          <Submit>Save</Submit>
          <Clear />
        </Form>
      </div>
    );
  }
});
