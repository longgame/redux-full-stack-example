import React, { Component, PropTypes } from 'react';

import Button from './Button';
import Modal from './Modal';
import LoginForm from './LoginForm';

module.exports = React.createClass({
  propTypes: {
    isEnabled: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
  },
  getInitialState: function() {
    return {
      isOpen: false,
    };
  },
  componentWillReceiveProps: function(nextProps) {
    if (this.state.isOpen && (nextProps.isEnabled === false)) {
      this.closeWidget();
    }
  },
  openWidget: function() {
    this.props.onOpen();
    this.setState({ isOpen: true });
  },
  closeWidget: function() {
    this.setState({ isOpen: false });
    this.props.onClose();
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
          <LoginForm />
        </Modal>
      </div>
    );
  }
});
