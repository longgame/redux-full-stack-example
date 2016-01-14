import React, { Component, PropTypes } from 'react';

import Button from '../vitamins/Button';
import Dropdown from '../vitamins/Dropdown';
import Menu from '../vitamins/Menu';
import Field from '../vitamins/Field';

module.exports = React.createClass({
  propTypes: {
    logoutAction: PropTypes.func.isRequired,
  },
  getInitialState: function() {
    return {
      isOpen: false,
    };
  },
  openWidget: function() {
    $('#user-widget').dropdown('show');
    this.setState({ isOpen: true });
  },
  closeWidget: function() {
    $('#user-widget').dropdown('hide');
    this.setState({ isOpen: false });
  },
  toggleWidget: function() {
    if (this.state.isOpen) {
      this.closeWidget();
    } else {
      this.openWidget();
    }
  },
  render: function() {
    const { logoutAction, ...props } = this.props;
    return (
      <div id='user-widget'>
        <Button
          onClick={ this.toggleWidget }
        >
          User
        </Button>
        <Dropdown
          isActive={ this.state.isOpen }
        >
          <Menu>
            <Field>
              <Button
                onClick={ logoutAction }
              >
                Logout
              </Button>
            </Field>
          </Menu>
        </Dropdown>
      </div>
    );
  }
});
