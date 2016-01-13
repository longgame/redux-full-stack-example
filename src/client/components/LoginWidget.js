import React, { Component, PropTypes } from 'react';

import Button from './Button';
import Modal from './Modal';
import LoginForm from './LoginForm';

module.exports = React.createClass({
  propTypes: {
    loginAction: PropTypes.func.isRequired,
    isEnabled: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
  },
  getInitialState: function() {
    return {
      isOpen: false,
    };
  },
  openWidget: function() {
    this.props.onOpen();
    this.setState({ isOpen: true });
  },
  closeWidget: function() {
    this.setState({ isOpen: false });
    this.props.onClose();
  },
  componentWillReceiveProps: function(nextProps) {
    if (this.state.isOpen && (nextProps.isEnabled === false)) {
      this.closeWidget();
    }
  },
  render: function() {
    return (
      <div id='login-widget'>
        <Button
          id='login-button'
          onClick={ this.openWidget }
        >
          Login
        </Button>
        <Modal
          id='login-modal'
          isActive={ (this.props.isEnabled && this.state.isOpen) }
        >
          <LoginForm
            onSubmit={ (data) => console.log("ACTION", data) }
          />
        </Modal>
      </div>
    );
  }
});
