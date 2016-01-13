import React, { Component, PropTypes } from 'react';

import Button from './Button';
import Modal from './Modal';
import RegisterForm from './RegisterForm';

module.exports = React.createClass({
  propTypes: {
    registerAction: PropTypes.func.isRequired,
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
    $('#register-widget').form('clear');
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
      <div id='register-widget'>
        <Button
          onClick={ this.openWidget }
        >
          Register
        </Button>
        <Modal
          isActive={ (this.props.isEnabled && this.state.isOpen) }
        >
          <RegisterForm
            onSubmit={ (refs) => {
              this.props.registerAction(refs.email, refs.password);
              this.closeWidget();
            }}
          />
        </Modal>
      </div>
    );
  }
});
