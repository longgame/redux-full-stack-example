import React, { Component, PropTypes } from 'react';

import Button from '../vitamins/Button';
import Dimmer from '../vitamins/PageDimmer';
import Modal from '../vitamins/Modal';

import LoginForm from './LoginForm';

module.exports = React.createClass({
  propTypes: {
    loginAction: PropTypes.func.isRequired,
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
    $('#login-widget').form('clear');
    this.setState({ isOpen: false });
  },
  render: function() {
    return (
      <div id='login-widget'>
        <Button
          onClick={ this.openWidget }
        >
          Login
        </Button>
        <Modal
          isActive={ this.state.isOpen }
        >
          <LoginForm
            onSubmit={ (refs) => {
              this.props.loginAction(refs.email, refs.password);
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
