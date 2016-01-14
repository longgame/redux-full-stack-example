import React, { Component, PropTypes } from 'react';

import Button from '../vitamins/Button';
import Dropdown from '../vitamins/Dropdown';
import Menu from '../vitamins/Menu';
import Item from '../vitamins/Item';
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
      <Dropdown id='user-widget'>
        <Button>User</Button>
        <Menu id='user-menu'>
          <Item>Profile</Item>
          <Item>Logout</Item>
        </Menu>
      </Dropdown>
    );
  }
});
