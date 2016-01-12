import React, { Component, PropTypes } from 'react';

import Button from './Button';
import Modal from './Modal';
import RegisterForm from './RegisterForm';

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
      <div id='register-widget'>
        <Button
          id='register-button'
          onClick={ this.openWidget }
        >
          Register
        </Button>
        <Modal
          id='register-modal'
          isActive={ (this.props.isEnabled && this.state.isOpen) }
        >
          <RegisterForm />
        </Modal>
      </div>
    );
  }
});
