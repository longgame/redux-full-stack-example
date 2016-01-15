import React, { Component, PropTypes } from 'react';

import Button from '../vitamins/Button';
import Dimmer from '../vitamins/PageDimmer';
import Modal from '../vitamins/Modal';

import RegisterForm from './RegisterForm';

module.exports = React.createClass({
  propTypes: {
    registerAction: PropTypes.func.isRequired,
  },
  getInitialState: function() {
    return {
      isOpen: false,
    };
  },
  openWidget: function() {
    this.setState({ isOpen: true });
  },
  closeWidget: function() {
    $('#register-widget').form('clear');
    this.setState({ isOpen: false });
  },
  render: function() {
    return (
      <div id='register-widget'>
        <Button
          className='ui teal button'
          onClick={ this.openWidget }
          >
          Register
        </Button>
        <Modal
          isActive={ this.state.isOpen }
          >
          <RegisterForm
            onSubmit={ (refs) => {
              this.props.registerAction(refs.email, refs.password);
              this.closeWidget();
            }}
            />
        </Modal>
        <Dimmer
          isActive={ this.state.isOpen }
          onClick={ this.closeWidget }
          />
      </div>
    );
  }
});
